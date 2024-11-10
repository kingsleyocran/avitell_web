import {
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  runTransaction,
  Timestamp,
  limit,
} from "firebase/firestore";
import { db } from "../../../../../firebaseClient";
import * as schemas from "../../../models/network_members";
import { deleteFile, uploadFile } from "../../storage/storage_func";
import { v4 as uuidv4 } from "uuid";
import {
  ResponseIndicator,
  ResponseIndicatorValues,
} from "@/backend/models/_shared";
import { buildFirestoreQuery, errorHandler } from "../_base";
import { dbInfoAggregatorRef } from "../_dbInfo";
import { getRandomNumberInRange } from "@/utils/helpers";

// Constants
const dbCollectionName = "network_members";
const dbCollection = collection(db, dbCollectionName);

const storageFilePath = `images/network_members`;

/**
 * Filter network members based on various criteria.
 * @param {FilterNetworkMembersSchema} requestData - Request Data
 * @returns {Promise} Response: [ListResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function filterNetworkMemberApi(
  requestData: schemas.FilterNetworkMembersSchema
): Promise<
  [
    Error | schemas.ListResponseNetworkMembersSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    let q = buildFirestoreQuery(requestData, dbCollection);
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return [
        {
          data: [],
          recordsCount: 0,
          message: "No records returned",
        } as schemas.ListResponseNetworkMembersSchema,
        ResponseIndicator.SUCCESS,
      ];
    } else {
      const response: schemas.NetworkMembersSchema[] = [];
      querySnapshot.forEach((doc) => {
        response.push({
          id: doc.id,

          ...doc.data(),
          updatedAt:
            doc.data().updatedAt instanceof Timestamp
              ? doc.data().updatedAt.toDate()
              : doc.data().updatedAt,
          createdAt:
            doc.data().createdAt instanceof Timestamp
              ? doc.data().createdAt.toDate()
              : doc.data().createdAt,
        } as schemas.NetworkMembersSchema);
      });

      return [
        {
          data: response,
          recordsCount: response.length,
          lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
          message: "Network members fetched",
        } as schemas.ListResponseNetworkMembersSchema,
        ResponseIndicator.SUCCESS,
      ];
    }
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Create a new network member.
 * @param {CreateNetworkMemberWithFileSchema} requestData - Request Data to create a waaitlist entry.
 * @returns {Promise} Response: [ResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function createNetworkMemberApi(
  requestData: schemas.CreateNetworkMemberWithFileSchema
): Promise<
  [
    Error | schemas.ResponseNetworkMemberSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    let imgUrl = "";
    let id = uuidv4();
    if (requestData.file) {
      imgUrl = await uploadFile({
        file: requestData.file,
        fileID: id,
        folderPath: storageFilePath,
      }); // Upload image if provided
    }

    const newMember: Omit<
      schemas.NetworkMembersSchema,
      "id" | "authId" | "createdAt" | "updatedAt"
    > = {
      ...requestData.data,
      imgUrl: imgUrl || requestData.data.imgUrl,
    };

    const response = await runTransaction(db, async (transaction) => {
      // get stats doc
      const dbInfoAggregatorDoc = await transaction.get(dbInfoAggregatorRef);
      if (!dbInfoAggregatorDoc.exists()) {
        throw "DBInfo document does not exist!";
      }

      const newDocRef = doc(db, dbCollectionName, id);
      const newDocData = {
        ...newMember,
        createdAt: new Date(),
        updatedAt: new Date(),
        authId: null,
      };

      // create new doc
      transaction.set(newDocRef, newDocData);

      // increase aggregator
      transaction.update(dbInfoAggregatorRef, {
        network_members: dbInfoAggregatorDoc.data().network_members + 1,
      });

      return newDocData;
    });

    return [
      {
        data: response,
        message: "New network member created successfully",
      } as schemas.ResponseNetworkMemberSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Update an existing network member.
 * @param {UpdateNetworkMemberWithFileSchema} requestData - Request Data to update a network member.
 * @param {string} memberId - The ID of the network member to update.
 * @returns {Promise} Response: [ResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function updateNetworkMemberApi(
  requestData: schemas.UpdateNetworkMemberWithFileSchema
): Promise<
  [
    Error | schemas.ResponseNetworkMemberSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    let imgUrl = requestData.data.imgUrl || "";
    let id = requestData.id;

    // If a new file is provided, upload it and get the new image URL
    if (requestData.file) {
      imgUrl = await uploadFile({
        file: requestData.file,
        fileID: id, // Use the existing member ID for the fileID
        folderPath: storageFilePath,
      });
    }

    // Prepare the updated member data
    const updatedMember: Omit<
      schemas.UpdateNetworkMemberSchema,
      "id" | "authId" | "createdAt" | "updatedAt"
    > = {
      ...requestData.data,
      imgUrl: imgUrl,
    };

    const response = await runTransaction(db, async (transaction) => {
      // get member doc
      const memberDocRef = doc(db, dbCollectionName, id);

      // update member data
      const updatedDocData = {
        ...updatedMember,
        updatedAt: new Date(), // Keep createdAt unchanged
      };

      transaction.update(memberDocRef, updatedDocData);
      return updatedDocData;
    });

    return [
      {
        data: response,
        message: "Network member updated successfully",
      } as schemas.ResponseNetworkMemberSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Get a network member by ID.
 * @param {string} id - ID.
 * @returns {Promise} Response: [ResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function getNetworkMemberApi(
  id: string
): Promise<
  [
    Error | schemas.ResponseNetworkMemberSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    const docRef = doc(db, dbCollectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return [
        {
          data: {
            id: docSnap.id,
            ...docSnap.data(),
            updatedAt:
              docSnap.data().updatedAt instanceof Timestamp
                ? docSnap.data().updatedAt.toDate()
                : docSnap.data().updatedAt,
            createdAt:
              docSnap.data().createdAt instanceof Timestamp
                ? docSnap.data().createdAt.toDate()
                : docSnap.data().createdAt,
          },
          message: "Network member fetched successfully",
        } as schemas.ResponseNetworkMemberSchema,
        ResponseIndicator.SUCCESS,
      ];
    } else {
      return errorHandler({ message: "No such data found!" });
    }
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Get a network member by email.
 * @param {string} email - Email to search for.
 * @returns {Promise} Response: [ResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function getNetworkMemberByEmailApi(
  email: string
): Promise<
  [
    Error | schemas.ResponseNetworkMemberSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    // Query Firestore to find a document where email equals the searchVal
    const q = query(
      collection(db, dbCollectionName),
      where("emailAddress", "==", email)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Assuming we only want the first match (if multiple, handle accordingly)
      const docSnap = querySnapshot.docs[0];

      return [
        {
          data: { id: docSnap.id, ...docSnap.data() },
          message: "Network member fetched successfully",
        } as schemas.ResponseNetworkMemberSchema,
        ResponseIndicator.SUCCESS,
      ];
    } else {
      return errorHandler({ message: "No such data found!" });
    }
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Delete a network member by ID
 * @param {NetworkMembersSchema} data - data of the network member
 * @returns {Promise} Response: [ResponseCustomerSchema, ResponseIndicator.SUCCESS]
 */
export async function deleteNetworkMemberApi(
  data: schemas.NetworkMembersSchema
): Promise<
  [
    Error | schemas.ResponseNetworkMemberSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    const response = await runTransaction(db, async (transaction) => {
      // get stats doc
      const dbInfoAggregatorDoc = await transaction.get(dbInfoAggregatorRef);
      if (!dbInfoAggregatorDoc.exists()) {
        throw "DBInfo document does not exist!";
      }

      const docRef = doc(db, dbCollectionName, data.id);

      // If the member has an image, delete it from Firebase Storage
      if (data.imgUrl) {
        await deleteFile({ objectUrl: data.imgUrl });
      }

      // create new doc
      transaction.delete(docRef);

      // increase aggregator
      transaction.update(dbInfoAggregatorRef, {
        network_members: dbInfoAggregatorDoc.data().network_members - 1,
      });

      return data;
    });

    return [
      {
        data: response,
        message: "NNetwork member deleted successfully.",
      } as schemas.ResponseNetworkMemberSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}


/**
 * Filter network members based on various criteria.
 * Keeps fetching documents with new random values until the target is reached.
 * @returns {Promise} Response: [ListResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function fetchRandomNetworkMembersApi(): Promise<
  [
    Error | schemas.ListResponseNetworkMembersJsonSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    const targetCount = 95; // Target number of documents
    const response: schemas.NetworkMembersJsonSchema[] = [];

    while (response.length < targetCount) {
      // Generate a new random number for each query
      const randomValue = getRandomNumberInRange(0, 10);

      // Query with the generated random number
      const q = query(
        dbCollection,
        where("randomNumber", ">=", randomValue),
        limit(targetCount - response.length) // Adjust limit to only fetch remaining needed docs
      );

      const querySnapshot = await getDocs(q);

      // Add fetched documents to the response array
      querySnapshot.forEach((doc) => {
        response.push({
          id: doc.id,
          fullName: doc.data().fullName,
          emailAddress: doc.data().emailAddress,
          profession: doc.data().profession,
          otherProfession: doc.data().otherProfession,
          imgUrl: doc.data().imgUrl,
        } as schemas.NetworkMembersJsonSchema);
      });

      // Break if no more documents are returned from the query
      if (querySnapshot.empty) {
        break;
      }
    }

    return [
      {
        data: response,
        recordsCount: response.length,
        lastDoc: undefined,
        message: "Network members fetched",
      } as schemas.ListResponseNetworkMembersJsonSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

import {
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  runTransaction,
  Timestamp,
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

// Constants
const dbCollectionName = "waitlist";
const dbCollection = collection(db, dbCollectionName);

const storageFilePath = `images/network_members`;

/**
 * Filter customers based on various criteria.
 * @param {FilterNetworkMembersSchema} requestData - Request Data
 * @returns {Promise} Response: [ListResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function filterWaitListApi(
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
          message: "Waitlist entries fetched",
        } as schemas.ListResponseNetworkMembersSchema,
        ResponseIndicator.SUCCESS,
      ];
    }
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Create a new waitlist entry.
 * @param {CreateNetworkMemberWithFileSchema} requestData - Request Data to create a waaitlist entry.
 * @returns {Promise} Response: [ResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function createWaitListEntryApi(
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
      imgUrl: imgUrl || (requestData.data.imgUrl ?? null)
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
        waitlist: dbInfoAggregatorDoc.data().waitlist + 1,
      });

      return newDocData;
    });

    return [
      {
        data: response,
        message: "New waitlist entry created successfully",
      } as schemas.ResponseNetworkMemberSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Get a waitlist entry by ID.
 * @param {string} id - ID.
 * @returns {Promise} Response: [ResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function getWaitListEntryApi(
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
          data: { id: docSnap.id, ...docSnap.data() },
          message: "Waitlist entry fetched successfully",
        } as schemas.ResponseNetworkMemberSchema,
        ResponseIndicator.SUCCESS,
      ];
    } else {
      return errorHandler({ message: "No such dat found!" });
    }
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Get a waitlist entry by email.
 * @param {string} email - Email to search for.
 * @returns {Promise} Response: [ResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function getWaitListEntryByEmailApi(
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
          message: "Waitlist entry fetched successfully",
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
 * Approve a membere in waitlist.
 * @param {NetworkMembersSchema} requestData - Request Data to approve a waitlist.
 * @returns {Promise} Response: [ResponseNetworkMemberSchema, ResponseIndicator.SUCCESS]
 */
export async function approvedWaitListToMemberApi(
  requestData: schemas.NetworkMembersSchema
): Promise<
  [
    Error | schemas.ResponseNetworkMemberSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    const networkMemberCollectionName = "network_members";
    console.log(requestData);
    let id = requestData.id;

    const newMember: Omit<
      schemas.NetworkMembersSchema,
      "id" | "authId" | "createdAt" | "updatedAt"
    > = {
      ...requestData,
      imgUrl: requestData.imgUrl,
    };

    const response = await runTransaction(db, async (transaction) => {
      // get stats doc
      const dbInfoAggregatorDoc = await transaction.get(dbInfoAggregatorRef);
      if (!dbInfoAggregatorDoc.exists()) {
        throw "DBInfo document does not exist!";
      }

      const newDocRef = doc(db, networkMemberCollectionName, id);
      const newDocData = {
        ...newMember,
        createdAt: new Date(),
        updatedAt: new Date(),
        authId: null,
      };

      // create new doc
      transaction.set(newDocRef, newDocData);

      // Delete waitlist document with id
      const waitlistDocRef = doc(db, dbCollectionName, id);
      transaction.delete(waitlistDocRef); // Delete the waitlist document

      // increase aggregator
      transaction.update(dbInfoAggregatorRef, {
        waitlist: dbInfoAggregatorDoc.data().waitlist - 1,
        network_members: dbInfoAggregatorDoc.data().network_members + 1,
      });

      return newDocData;
    });

    return [
      {
        data: response,
        message: "New network member in waitllist approved successfully",
      } as schemas.ResponseNetworkMemberSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Delete a waitlist entry by ID
 * @param {NetworkMembersSchema} data - data of the waitlist entry
 * @returns {Promise} Response: [ResponseCustomerSchema, ResponseIndicator.SUCCESS]
 */
export async function deleteWaitListEntryApi(
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
        waitlist: dbInfoAggregatorDoc.data().waitlist - 1,
      });

      return data;
    });

    return [
      {
        data: response,
        message: "Waitlist entry deleted successfully.",
      } as schemas.ResponseNetworkMemberSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

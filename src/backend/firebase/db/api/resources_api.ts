import {
  collection,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../../../../firebaseClient";
import * as schemas from "../../../models/resources";
import { deleteFile, uploadFile } from "../../storage/storage_func";
import { v4 as uuidv4 } from "uuid";
import {
  ResponseIndicator,
  ResponseIndicatorValues,
} from "@/backend/models/_shared";
import { buildFirestoreQuery, errorHandler } from "../_base";
import { dbInfoAggregatorRef } from "../_dbInfo";

// Constants
const dbCollectionName = "resources";
const dbCollection = collection(db, dbCollectionName);

/**
 * Filter resources based on various criteria.
 * @param {FilterResourcesSchema} requestData - Request Data
 * @returns {Promise} Response: [ListResponseResourcesSchema, ResponseIndicator.SUCCESS]
 */
export async function filterResourcesApi(
  requestData: schemas.FilterResourcesSchema
): Promise<
  [
    Error | schemas.ListResponseResourcesSchema | string,
    ResponseIndicatorValues
  ]
> {
  try {
    let q = buildFirestoreQuery(requestData, dbCollection);
    console.log(q)
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      return [
        {
          data: [],
          recordsCount: 0,
          message: "No records returned",
        } as schemas.ListResponseResourcesSchema,
        ResponseIndicator.SUCCESS,
      ];
    } else {
      const response: schemas.ResourceSchema[] = [];
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
        } as schemas.ResourceSchema);
      });

      return [
        {
          data: response,
          recordsCount: response.length,
          lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
          message: "Resources fetched",
        } as schemas.ListResponseResourcesSchema,
        ResponseIndicator.SUCCESS,
      ];
    }
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Create a new resource.
 * @param {CreateResourceSchema} requestData - Request Data to create an event.
 * @returns {Promise} Response: [ResponseResourceSchema, ResponseIndicator.SUCCESS]
 */
export async function createResourceApi(
  requestData: schemas.CreateResourceSchema
): Promise<
  [Error | schemas.ResponseResourceSchema | string, ResponseIndicatorValues]
> {
  try {
    let id = uuidv4();
    const newData: Omit<
      schemas.ResourceSchema,
      "id" | "createdAt" | "updatedAt"
    > = {
      ...requestData,
    };

    const response = await runTransaction(db, async (transaction) => {
      // get stats doc
      const dbInfoAggregatorDoc = await transaction.get(dbInfoAggregatorRef);
      if (!dbInfoAggregatorDoc.exists()) {
        throw "DBInfo document does not exist!";
      }

      const newDocRef = doc(db, dbCollectionName, id);
      const newDocData = {
        ...newData,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      // create new doc
      transaction.set(newDocRef, newDocData);

      // increase aggregator
      transaction.update(dbInfoAggregatorRef, {
        resources: dbInfoAggregatorDoc.data().resources + 1,
      });

      return newDocData;
    });

    return [
      {
        data: response,
        message: "New resource created successfully",
      } as schemas.ResponseResourceSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Update an existing event.
 * @param {UpdateEventWithFileSchema} requestData - Request Data to update a event.
 * @returns {Promise} Response: [ResponseResourceSchema, ResponseIndicator.SUCCESS]
 */
export async function updateResourceApi(
  requestData: schemas.UpdateResourceWithIDSchema
): Promise<
  [Error | schemas.ResponseResourceSchema | string, ResponseIndicatorValues]
> {
  try {
    let id = requestData.id;

    // Prepare the updated member data
    const updatedData: Omit<
      schemas.UpdateResourceSchema,
      "id" | "createdAt" | "updatedAt"
    > = {
      ...requestData.data,
    };

    const response = await runTransaction(db, async (transaction) => {
      // get member doc
      const dataDocRef = doc(db, dbCollectionName, id);

      // update member data
      const updatedDocData = {
        ...updatedData,
        updatedAt: new Date(), // Keep createdAt unchanged
      };

      transaction.update(dataDocRef, updatedDocData);
      return updatedDocData;
    });

    return [
      {
        data: response,
        message: "Resources updated successfully",
      } as schemas.ResponseResourceSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Get a resource by ID.
 * @param {string} id - ID.
 * @returns {Promise} Response: [ResponseResourceSchema, ResponseIndicator.SUCCESS]
 */
export async function getResourceApi(
  id: string
): Promise<
  [Error | schemas.ResponseResourceSchema | string, ResponseIndicatorValues]
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
          message: "Resource fetched successfully",
        } as schemas.ResponseResourceSchema,
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
 * Delete a resource by ID
 * @param {ResourceSchema} data - Data of the event
 * @returns {Promise} Response: [ResponseCustomerSchema, ResponseIndicator.SUCCESS]
 */
export async function deleteResourceApi(
  data: schemas.ResourceSchema
): Promise<
  [Error | schemas.ResponseResourceSchema | string, ResponseIndicatorValues]
> {
  try {
    const response = await runTransaction(db, async (transaction) => {
      // get stats doc
      const dbInfoAggregatorDoc = await transaction.get(dbInfoAggregatorRef);
      if (!dbInfoAggregatorDoc.exists()) {
        throw "DBInfo document does not exist!";
      }

      const docRef = doc(db, dbCollectionName, data.id);

      // create new doc
      transaction.delete(docRef);

      // increase aggregator
      transaction.update(dbInfoAggregatorRef, {
        events: dbInfoAggregatorDoc.data().events - 1,
      });

      return data;
    });

    return [
      {
        data: response,
        message: "Resource deleted successfully.",
      } as schemas.ResponseResourceSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

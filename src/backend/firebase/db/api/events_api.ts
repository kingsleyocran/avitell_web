import {
  collection,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../../../../firebaseClient";
import * as schemas from "../../../models/events";
import { deleteFile, uploadFile } from "../../storage/storage_func";
import { v4 as uuidv4 } from "uuid";
import {
  ResponseIndicator,
  ResponseIndicatorValues,
} from "@/backend/models/_shared";
import { buildFirestoreQuery, errorHandler } from "../_base";
import { dbInfoAggregatorRef } from "../_dbInfo";

// Constants
const dbCollectionName = "events";
const dbCollection = collection(db, dbCollectionName);
const storageFilePath = `images/events`;

/**
 * Filter events based on various criteria.
 * @param {FilterEventsSchema} requestData - Request Data
 * @returns {Promise} Response: [ListResponseEventSchema, ResponseIndicator.SUCCESS]
 */
export async function filterEventsApi(
  requestData: schemas.FilterEventsSchema
): Promise<
  [Error | schemas.ListResponseEventsSchema | string, ResponseIndicatorValues]
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
        } as schemas.ListResponseEventsSchema,
        ResponseIndicator.SUCCESS,
      ];
    } else {
      const response: schemas.EventSchema[] = [];
      querySnapshot.forEach((doc) => {
        response.push({
          id: doc.id,
          ...doc.data(),
          scheduledDate:
            doc.data().scheduledDate instanceof Timestamp
              ? doc.data().scheduledDate.toDate()
              : doc.data().scheduledDate,
          updatedAt:
            doc.data().updatedAt instanceof Timestamp
              ? doc.data().updatedAt.toDate()
              : doc.data().updatedAt,
          createdAt:
            doc.data().createdAt instanceof Timestamp
              ? doc.data().createdAt.toDate()
              : doc.data().createdAt,
        } as schemas.EventSchema);
      });

      return [
        {
          data: response,
          recordsCount: response.length,
          lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
          message: "Events fetched",
        } as schemas.ListResponseEventsSchema,
        ResponseIndicator.SUCCESS,
      ];
    }
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Create a new event.
 * @param {CreateEventWithFileSchema} requestData - Request Data to create an event.
 * @returns {Promise} Response: [ResponseEventSchema, ResponseIndicator.SUCCESS]
 */
export async function createEventApi(
  requestData: schemas.CreateEventWithFileSchema
): Promise<
  [Error | schemas.ResponseEventSchema | string, ResponseIndicatorValues]
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
      schemas.EventSchema,
      "id" | "createdAt" | "updatedAt"
    > = {
      ...requestData.data,
      imgUrl: imgUrl || (requestData.data.imgUrl ?? null),
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
      };

      // create new doc
      transaction.set(newDocRef, newDocData);

      // increase aggregator
      transaction.update(dbInfoAggregatorRef, {
        events: dbInfoAggregatorDoc.data().events + 1,
      });

      return newDocData;
    });

    return [
      {
        data: response,
        message: "New event created successfully",
      } as schemas.ResponseEventSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Update an existing event.
 * @param {UpdateEventWithFileSchema} requestData - Request Data to update a event.
 * @returns {Promise} Response: [ResponseEventSchema, ResponseIndicator.SUCCESS]
 */
export async function updateEventApi(
  requestData: schemas.UpdateEventWithFileSchema
): Promise<
  [Error | schemas.ResponseEventSchema | string, ResponseIndicatorValues]
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
      schemas.UpdateEventSchema,
      "id" | "createdAt" | "updatedAt"
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
        message: "Event updated successfully",
      } as schemas.ResponseEventSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

/**
 * Get a event by ID.
 * @param {string} id - ID.
 * @returns {Promise} Response: [ResponseEventSchema, ResponseIndicator.SUCCESS]
 */
export async function getEventApi(
  id: string
): Promise<
  [Error | schemas.ResponseEventSchema | string, ResponseIndicatorValues]
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
            scheduledDate:
              docSnap.data().scheduledDate instanceof Timestamp
                ? docSnap.data().scheduledDate.toDate()
                : docSnap.data().scheduledDate,
            updatedAt:
              docSnap.data().updatedAt instanceof Timestamp
                ? docSnap.data().updatedAt.toDate()
                : docSnap.data().updatedAt,
            createdAt:
              docSnap.data().createdAt instanceof Timestamp
                ? docSnap.data().createdAt.toDate()
                : docSnap.data().createdAt,
          },
          message: "Event fetched successfully",
        } as schemas.ResponseEventSchema,
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
 * Delete a event by ID
 * @param {EventSchema} data - Data of the event
 * @returns {Promise} Response: [ResponseCustomerSchema, ResponseIndicator.SUCCESS]
 */
export async function deleteEventApi(
  data: schemas.EventSchema
): Promise<
  [Error | schemas.ResponseEventSchema | string, ResponseIndicatorValues]
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
        events: dbInfoAggregatorDoc.data().events - 1,
      });

      return data;
    });

    return [
      {
        data: response,
        message: "Event deleted successfully.",
      } as schemas.ResponseEventSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: any) {
    return errorHandler(error);
  }
}

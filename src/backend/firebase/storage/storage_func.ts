import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../../../../firebaseClient";
import { v4 as uuidv4 } from "uuid";

// Upload image to Firebase Storage
export async function uploadFile({
  file,
  fileID = uuidv4(),
  folderPath,
}: {
  file: File;
  fileID?: string;
  folderPath: string;
}): Promise<string> {
  const storageRef = ref(storage, `${folderPath}/${fileID}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
}

// delete image from firebase
export async function deleteFile({ objectUrl }: { objectUrl: string }) {
  const imageRef = ref(storage, objectUrl);
  await deleteObject(imageRef).catch((error) => {
    console.warn("Error deleting image:", error);
  });
}

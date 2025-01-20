import { ActionFunction } from "@remix-run/node";
import { deleteDocument, deleteDocuments } from "~/api/Documents";

export const action: ActionFunction = async ({ request }) => {
  try {
    if (request.method !== "DELETE") {
      return { error: "Method not allowed", status: 405 };
      }
      const formData = await request.formData();
      const idsString = formData.get("documentIds");

      const ids = JSON.parse(idsString);
      const response = (ids.length === 1) ? await deleteDocument(ids[0]) : await deleteDocuments(ids);
      return { ...response, success:true }
  } catch (error) {
    console.error("error deleting:", error);
    return {
      error: error.message || "unable to delete",
      success: false,
      status: 400,
    };
  }
};

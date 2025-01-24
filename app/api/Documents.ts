import axios from "axios";
const baseUrl = process.env.API_URL;

export async function getDocuments(user_id: string) {
  const response = await fetch(`${baseUrl}/documents/user/${user_id}`);
  if (!response.ok) {
    // throw new Error("Failed to fetch documents");
    return [];
  }
  return response.json();
}

export async function getDocumentDetails(document_id: number | string) {
  const response = await axios.get(`${baseUrl}/documents/${document_id}`);
  return response.data;
}
export async function deleteDocument(document_id: number) {
  console.log("document_id :", document_id);
  const response = await axios.delete(`${baseUrl}/documents/${document_id}`, {
    method: "DELETE",
  });
  console.log("response :::: ", response)
  if (response.status === 200) {
    return { success: true, message: "Document deleted successfully" };
  }
  return response.data
}

export async function deleteDocuments(documentIds: number[]) {
    console.log("documentIds:", typeof(documentIds[0]), documentIds);
    
    const response = await axios.delete(`${baseUrl}/documents/batch/`, {
        data: documentIds,
    method: "DELETE",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return Response.json(response.data);
}

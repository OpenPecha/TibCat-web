import axios from "axios";
const baseUrl = process.env.API_URL;

export async function updateSegment(
  segmentId: number,
  data: {
    text: string;
    target_text: string;
    document_id: string | number;
    order: string | number;
  }
) {
  const url = `${baseUrl}/segments/${segmentId}`;
  try {
    const response = await axios.put(url, data, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("Response:", response.data);
    return response.data; // Return the response data for further use
  } catch (error) {
    console.error("Error updating segment:", error);
    throw error; // Rethrow the error for handling upstream
  }
}

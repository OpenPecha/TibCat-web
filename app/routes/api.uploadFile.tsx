import { ActionFunction } from "@remix-run/node";
import axios from "axios";

export const action: ActionFunction = async ({ request }) => {
  const endpoint = process.env.API_URL;

  try {
    if (request.method !== "POST") {
      return { error: "Method not allowed", status: 405 };
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!file || typeof file === "string") {
      throw new Error("Invalid file upload");
    }

    const formdata = new FormData();
    formdata.append("file", file);

    const response = await axios.post(`${endpoint}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status !== 201) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const result = await response.data;
    console.log("File uploaded successfully:", result);

    return { success: true, data: { ...result, fileName: file.name } };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      error: error.message || "Upload failed",
      success: false,
      status: 400,
    };
  }
};

import { ActionFunction } from "@remix-run/node";
import axios from "axios";

export const action: ActionFunction = async ({ request }) => {
  const endpoint = process.env.API_URL;

  try {
    if (request.method !== "POST") {
      return { error: "Method not allowed", status: 405 };
    }
    const formData = await request.formData();
      const segmentId = formData.get("segment_id");
    const split_position = formData.get("split_position");
    console.log("segmentId:", segmentId, "split_position:", split_position);
      const res = await axios.post(`${endpoint}/segments/split`, {
        segment_id: segmentId,
        split_position: split_position,
      });
      console.log("Response:", res.data);
    return { success: true, data: res.data };
  } catch (error) {
    console.error("split error:", error);
    return {
      error: error?.message || "Split failed",
      success: false,
      status: 400,
    };
  }
};

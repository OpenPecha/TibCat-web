import { ActionFunction } from "@remix-run/node";
import { updateSegment } from "~/api/Segments";

export const action: ActionFunction = async ({ request }) => {
  try {
    if (request.method !== "POST") {
      return { error: "Method not allowed", status: 405 };
    }
    const formData = await request.formData();
    const segmentId = formData.get("segment_id");
    const text = formData.get("text");
    const targetText = formData.get("target_text");
    const documentId = formData.get("document_id");
    const order = formData.get("order");
    const data = {
      text,
      target_text: targetText,
      document_id: documentId,
      order,
    };
    const res = await updateSegment(segmentId, data);
    console.log("Response: in trsass", res);
    return { success: true, data: res };
  } catch (error) {
    console.error("Translation error:", error);
    return {
      error: error?.message || "Translation failed",
      success: false,
      status: 400,
    };
  }
};

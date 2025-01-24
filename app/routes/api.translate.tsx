import axios from "axios";

export async function action({ request }) {
  const formData = await request.formData();
  const url = process.env.API_URL;

  const params = new URLSearchParams({
    file_url: formData.get("file_url"),
  });

  const data = new URLSearchParams({
    user_id: formData.get("user_id"),
    domain: formData.get("domain"),
    source_lang: formData.get("source_lang"),
    target_lang: formData.get("target_lang"),
    translation_order: formData.get("translation_order"),
  });

  try {
    const response = await axios.post(`${url}/process/?${params}`, data, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return Response.json({
      success: true,
      message: "Translation processed successfully",
      data: response.data,
    });
  } catch (error) {
    console.error("Error translating docx ::::", error.response?.data || error.message);
    return Response.json({
      success: false,
      message: error.response?.data?.detail || "Failed to process translation",
      error: error.response?.data || error.message || "fail to process",
      status: error.response?.status || 500,
    });
  }
}

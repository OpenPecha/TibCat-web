import axios from "axios";

export const getTranslationProgress = async (document_id,
) => {
  try {
    const res = await axios.get(
      `https://tibcat-backend.onrender.com/documents/${document_id}/translation_progress`
    );

      // console.log("Translation Progress:", res);
      return res.data;
  } catch (error) {
    // Check if the error is a failure or 404 from the first API
    console.error(
      "error get tranlation progress for document:",
      document_id,
      error
      );
      return {error: error.message || "Failed to fetch translation progress", success: false, status: 400};
  }
};

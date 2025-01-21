import axios from "axios";

export const fetchModelSuggestions = async (segment_id, setTranslationSuggestions) => {
  try {
    // Make the API call
    const { data } = await axios.get(
      `https://tibcat-backend.onrender.com/model_translations/segment/${segment_id}`
    );
    // Update the state with the suggestions
    setTranslationSuggestions(data || []);
  } catch (error) {
      console.error("Error fetching model suggestions:", error);
    setTranslationSuggestions([]);
  }
};

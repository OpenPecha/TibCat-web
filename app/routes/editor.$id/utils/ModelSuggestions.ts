import axios from "axios";

export const fetchModelSuggestions = async (
  segment_id,
  setTranslationSuggestions,
  setFallbackSuggestions,
  setFetchingSuggestions
) => {
  try {
    // Make the first API call
    setFetchingSuggestions(true);
    console.log("Fetching model suggestions for segment:", segment_id);
    const { data } = await axios.get(
      `https://tibcat-backend.onrender.com/model_translations/segment/${segment_id}`
    );

    // If data is returned and is valid, update the state
    if (data && data.length > 0) {
      console.log("Suggestions:", data);
      setTranslationSuggestions(data);
    setFetchingSuggestions(false);

    } else {
      // If no data returned from the first API, call the second API
      console.log("No suggestions found, fetching fallback translation.");
      const fallbackData = await axios.post(
        `https://tibcat-backend.onrender.com/translate/`,
        { segment_id }
      );
      console.log("Fallback translation suggestions:", fallbackData.data);
      setFallbackSuggestions(fallbackData.data || []);
    setFetchingSuggestions(false);

    }
  } catch (error) {
    // Check if the error is a failure or 404 from the first API
    console.error(
      "Error fetching model suggestions for segment:",
      segment_id,
      error
    );

    // If error status is 404 or any other error, fall back to the second API
    if (
      error.response &&
      (error.response.status === 404 || error.response.status >= 500)
    ) {
      console.log(
        "First API failed or returned 404, fetching fallback translation."
      );
      try {
        const fallbackData = await axios.post(
          `https://tibcat-backend.onrender.com/translate/`,
          { segment_id }
        );
        console.log("Fallback translation suggestions:", fallbackData.data);
        setFallbackSuggestions(fallbackData.data || []);
    setFetchingSuggestions(false);

      } catch (fallbackError) {
        console.error("Error fetching fallback translation:", fallbackError);
        setFallbackSuggestions([]); // Set an empty array in case of error
    setFetchingSuggestions(false);

      }
    } else {
      // If error is not 404/500, just handle it normally (set empty suggestions)
      setTranslationSuggestions([]);
    setFetchingSuggestions(false);

    }
  }
};




import { useLoaderData } from "@remix-run/react";

export default function Suggestions({
  translationSuggestions,
  fallbackSuggestions,
  segment,
  fetchingSuggestions,
}) {

  const { documentDetails } = useLoaderData();
    if(fetchingSuggestions) return (
      <div className="flex items-start justify-between space-x-4 space-y-1 animate-pulse my-4">
        {/* Hidden element for layout */}
        <div className="opacity-0 items-center justify-center rounded-full ">
          <div className="w-4 h-4 rounded-full bg-neutral-300"></div>
        </div>

        {/* Source text skeleton */}
        <div className="flex-1 bg-neutral-200 h-10 rounded"></div>

        {/* Suggestion container */}
        <div className="flex-1 flex flex-col space-y-2 h-16">
          {/* Target text skeleton */}
          <div className="flex-1 bg-neutral-200 h-8 w-full rounded"></div>

          {/* Additional info skeleton */}
          <div className="flex justify-between gap-2 items-center w-full">
            <div className="bg-neutral-200 h-3 w-10 rounded"></div>
            <div className="flex items-end justify-start gap-2">
              <div className="bg-neutral-200 h-3 w-16 rounded"></div>
              <div className="bg-neutral-200 h-3 w-12 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="space-y-2 space-x-4 pb-4 ease-in transition-all duration-300">
      <div className="max-h-48 overflow-y-scroll scrollbar-hide">
        {/* Render translation suggestions if available */}
        {translationSuggestions?.length > 0 ? (
          translationSuggestions.map((suggestion, index) => (
            <div
              className="flex items-start justify-between space-x-4 space-y-1"
              key={suggestion.id}
            >
              {/* Hidden element for layout */}
              <div className="flex items-center justify-center rounded-full opacity-0">
                <div className="w-4 h-4 rounded-full bg-primary-700"></div>
              </div>
              <p
                className={`flex-1 text-neutral-800 ${
                  documentDetails.source_lang === "bo"
                    ? "font-monlam text-[12px] leading-6"
                    : "font-poppins text-[12px]"
                }`}
              >
                {segment.source_text}
              </p>
              <div className="flex-1 flex flex-col items-end justify-start group/{swap} gap-2 pr-5">
                <p
                  className={`flex-1 text-neutral-800  text-left w-full ${
                    documentDetails.target_lang === "bo"
                      ? "font-monlam text-[12px] leading-5"
                      : "font-poppins text-[12px]"
                  }`}
                >
                  {suggestion.target_text}
                </p>
                <div className="flex justify-end gap-2 items-center w-full relative ">
                  <div className="flex-1 pl-2 text-xs text-neutral-800 opacity-0 transition-opacity duration-300 group-hover/{swap}:opacity-100 absolute left-2">
                    CTRL+{index + 1}
                  </div>
                  <p className="text-xs text-neutral-800">
                    Source: {suggestion.translated_by}
                  </p>
                  <span className="text-xs text-neutral-800">
                    {suggestion?.target_lang === "bo"
                      ? "Tibetan "
                      : "English " + suggestion?.target_lang}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          // If no translation suggestions, show fallback suggestions
          <div>
            {fallbackSuggestions && (
              <>
                {/* Show melong if available */}
                {fallbackSuggestions.melong && (
                  <div className="flex items-start justify-between space-x-4 space-y-1">
                    <div className="flex items-center justify-center rounded-full opacity-0">
                      <div className="w-4 h-4 rounded-full bg-primary-700"></div>
                    </div>
                    <p
                      className={`flex-1 text-neutral-800 ${
                        documentDetails.source_lang === "bo"
                          ? "font-monlam text-[12px] leading-6"
                          : "font-poppins text-[12px]"
                      }`}
                    >
                      {segment.source_text}
                    </p>
                    <div className="flex-1 flex flex-col items-end justify-start group/{swap} gap-2 pr-5 pt-2">
                      <p
                        className={`flex-1 text-neutral-800  text-left w-full ${
                          documentDetails.target_lang === "bo"
                            ? "font-monlam text-[12px] leading-5"
                            : "font-poppins text-[12px]"
                        }`}
                      >
                        {fallbackSuggestions.melong}
                      </p>
                      <div className="flex justify-end gap-2 items-center w-full relative ">
                        <div className="flex-1 pl-2 text-xs text-neutral-800 opacity-0 transition-opacity duration-300 group-hover/{swap}:opacity-100 absolute left-2">
                          CTRL+1
                        </div>
                        <p className="text-xs text-neutral-800">
                          Source: Melong
                        </p>
                        <span className="text-xs text-neutral-800">
                          {fallbackSuggestions?.target_language === "bo"
                            ? "Tibetan"
                            : "English" + fallbackSuggestions?.target_language}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {/* Show mitra if available */}
                {fallbackSuggestions.mitra && (
                  <div className="flex items-start justify-between space-x-4 space-y-1">
                    <div className="flex items-center justify-center rounded-full opacity-0">
                      <div className="w-4 h-4 rounded-full bg-primary-700"></div>
                    </div>
                    <p
                      className={`flex-1 text-neutral-800 ${
                        documentDetails.source_lang === "bo"
                          ? "font-monlam text-[12px] leading-6"
                          : "font-poppins text-[12px]"
                      }`}
                    >
                      {segment.source_text}
                    </p>
                    <div className="flex-1 flex flex-col items-end justify-start group/{swap} gap-2 pr-5 pt-2">
                      <p
                        className={`flex-1 text-neutral-800  text-left w-full ${
                          documentDetails.target_lang === "bo"
                            ? "font-monlam text-[12px] leading-5"
                            : "font-poppins text-[12px]"
                        }`}
                      >
                        {fallbackSuggestions.mitra}
                      </p>
                      <div className="flex justify-end gap-2 items-center w-full relative ">
                        <div className="flex-1 pl-2 text-xs text-neutral-800 opacity-0 transition-opacity duration-300 group-hover/{swap}:opacity-100 absolute left-2">
                          CTRL+2
                        </div>
                        <p className="text-xs text-neutral-800">
                          Source: Mitra
                        </p>
                        <span className="text-xs text-neutral-800">
                          {fallbackSuggestions?.target_language === "bo"
                            ? "Tibetan"
                            : "English" + fallbackSuggestions?.target_language}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {!fallbackSuggestions.melong && !fallbackSuggestions.mitra && (
                  <div className="w-full py-4 text-center">
                    No suggestions available
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

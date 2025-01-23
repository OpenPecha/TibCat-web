import { useFetcher, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SplitArrowIcon from "~/icons/SplitArrowIcon";
import SplitIcon from "~/icons/SplitIcon";
import { fetchModelSuggestions } from "../utils/ModelSuggestions";
import Suggestions from "./suggestions";
import SuggestionCount from "./SuggestionCount";

const TranslationContent = ({ segment, handleActiveTab }) => {
  const { documentDetails } = useLoaderData();
  const fetcher = useFetcher();
  const targetRef = useRef(null);
  const [isSpliting, setIsSpliting] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(-1);
  const [translationSuggestions, setTranslationSuggestions] = useState(null);
  const [fallbackSuggestions, setFallbackSuggestions] = useState(null);
  const [fetchingSuggestions, setFetchingSuggestions] = useState(false);
  const handleSplit = () => {
    const formData = new FormData();
    formData.append("segment_id", segment.id);
    formData.append("split_position", (clickedIndex + 1).toString());
    fetcher.submit(formData, {
      method: "post",
      action: `/api/segment/split`,
    });
    setIsSpliting(false);
    setClickedIndex(-1);
  };

  const handleTranslation = () => {
    const editedTranslation = targetRef.current?.value;
    const formData = new FormData();
    formData.append("text", segment.source_text);
    formData.append("target_text", editedTranslation);
    formData.append("document_id", documentDetails.id);
    formData.append("order", segment.order);
    formData.append("segment_id", segment.id);

    fetcher.submit(formData, {
      method: "post",
      action: `/api/translate/segment/`,
    });
    handleActiveTab();
  };

  const handleKeyDown = (e) => {
    if (!e.ctrlKey) return;
    if (e.key.toLowerCase() === "s") {
      e.preventDefault();
      setIsSpliting(true);
      return;
    }
    const numKey = parseInt(e.key);
    if (translationSuggestions?.length > 0) {
      if (numKey >= 1 && numKey <= translationSuggestions?.length) {
        e.preventDefault();
        const suggestionIndex = numKey - 1;

        if (translationSuggestions?.length > suggestionIndex) {
          targetRef.current.value =
            translationSuggestions[suggestionIndex].target_text;
        }
        return;
      }
    } else if (fallbackSuggestions) {
      e.preventDefault();
      targetRef.current.value =
        numKey === 1 ? fallbackSuggestions?.melong : fallbackSuggestions?.mitra;
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    fetchModelSuggestions(
      segment.id,
      setTranslationSuggestions,
      setFallbackSuggestions,
      setFetchingSuggestions
    );
  }, [segment]);

  return (
    <div className="w-full bg-white rounded-lg border border-primary-600 px-4 relative group/{split}">
      <div
        className="absolute -left-12 top-2 opacity-0 group-hover/{split}:opacity-100 cursor-pointer"
        onClick={() => setIsSpliting(true)}
      >
        <SplitIcon height="30" width="50" className="" />
        <div className="text-[10px] text-center text-neutral-800">CTRL+S</div>
      </div>
      <div className="flex justify-center mb-4">
        <span className="px-3 py-1 bg-primary-300 rounded-b-md text-neutral-900 text-xs font-medium">
          Melong MT
        </span>
      </div>

      {/* Original Text Section */}
      <div className="flex items-start justify-between space-x-4">
        <div className=" flex items-center justify-center rounded-full">
          <div className="w-4 h-4 rounded-full bg-primary-700"></div>
        </div>
        {isSpliting ? (
          <div className="flex-1 flex flex-col item-center">
            <p
              className={`flex-1 bg-neutral-50 rounded-lg p-2 ${
                documentDetails.source_lang === "bo"
                  ? "font-monlam text-xs leading-6"
                  : "font-poppins"
              }`}
            >
              {segment.source_text.split("")?.map((text, index) => (
                <span
                  key={index}
                  className="cursor-text"
                  onClick={() => setClickedIndex(index)}
                >
                  {text}
                  {clickedIndex === index && (
                    <SplitArrowIcon
                      className="inline-block mx-1"
                      height="20"
                      width="30"
                    />
                  )}
                </span>
              ))}
            </p>
            <div className="flex items-center justify-end space-x-2">
              <button
                className=" px-3 py-1 bg-primary-50 shadow-inner text-black text-sm rounded-md hover:scale-105 transition-transform duration-100 mt-1"
                onClick={() => setIsSpliting(false)}
              >
                Cancel
              </button>
              <button
                className={`px-3 py-1 bg-secondary-600 text-white text-sm rounded-md hover:scale-105 transition-transform duration-100 mt-1 ${
                  clickedIndex === -1 &&
                  "opacity-50 cursor-not-allowed hover:scale-100"
                }`}
                onClick={handleSplit}
                disabled={clickedIndex === -1}
              >
                Confirm
              </button>
            </div>
          </div>
        ) : (
          <p
            className={`flex-1 ${
              documentDetails.source_lang === "bo"
                ? "font-monlam text-xs leading-6"
                : "font-poppins"
            }`}
          >
            {segment.source_text}
          </p>
        )}

        <div className="flex-1 flex flex-col item-center">
          <div className="flex-1 w-full min-h-16">
            <textarea
              ref={targetRef}
              name="translation"
              className={`border-[0.5px] border-neutral-600 inset-0 w-full h-full min-h-16 pt-1 pb-3 px-3 shadow-input rounded-md  outline-none ring-0 bg-white overflow-y-scroll scrollbar-hide placeholder:text-sm placeholder:font-poppins ${
                documentDetails.target_lang === "bo"
                  ? "font-monlam text-xs leading-6"
                  : "font-poppins text-[14px]"
              }`}
              placeholder="Translate here..."
              defaultValue={segment.target_text}
            />
          </div>
          <div className="flex-1 flex items-center justify-end">
            <button
              className={`px-3 py-1 bg-secondary-600 text-white text-sm rounded-md hover:scale-105 transition-transform duration-100 mt-1`}
              onClick={handleTranslation}
            >
              Translated
            </button>
          </div>
        </div>
      </div>

      <SuggestionCount {...{ translationSuggestions, fallbackSuggestions }} />
      <Suggestions
        {...{
          translationSuggestions,
          fallbackSuggestions,
          segment,
          fetchingSuggestions,
        }}
      />
    </div>
  );
};

export default TranslationContent;

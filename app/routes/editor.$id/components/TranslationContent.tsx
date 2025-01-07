import { useEffect, useState } from "react";
import SplitArrowIcon from "~/icons/SplitArrowIcon";
import SplitIcon from "~/icons/SplitIcon";

const TranslationContent = ({
  segment,
  editTranslation,
  handleAccordionChange,
  splitSegment,
  updateTranslation,
  segments,
}) => {
  const [isSpliting, setIsSpliting] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleSplit = () => {
    splitSegment(segment.id, clickedIndex + 1);
    setIsSpliting(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey) {

        console.log("key", e.key);
        switch (e.key) {
          case "1":
            e.preventDefault();
            if (segment?.suggestions[0]) {
              updateTranslation(segment.id, 0);
            }
            break;
          case "2":
            e.preventDefault();
            if (segment?.suggestions[1]) {
              updateTranslation(segment.id, 1);
            }
            break;
          case "3":
            e.preventDefault();
            if (segment?.suggestions[2]) {
              updateTranslation(segment.id, 2);
            }
            break;
          case "4":
            e.preventDefault();
            if (segment?.suggestions[3]) {
              updateTranslation(segment.id, 3);
            }
            break;
          case "s":
            e.preventDefault();
            setIsSpliting(true);

            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [segments]);

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
            <p className="flex-1 font-poppins bg-neutral-50 rounded-lg p-2">
              {segment.sourceText.split(" ")?.map((text, index) => (
                <span
                  key={index}
                  className="cursor-text"
                  onClick={() => setClickedIndex(index)}
                >
                  {text}{" "}
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
                  clickedIndex === null &&
                  "opacity-50 cursor-not-allowed hover:scale-100"
                }`}
                onClick={() => handleSplit()}
                disabled={clickedIndex === null}
              >
                Confirm
              </button>
            </div>
          </div>
        ) : (
          <p className="flex-1 font-poppins">{segment.sourceText}</p>
        )}

        <div className="flex-1 flex flex-col item-center">
          <div className="relative flex-1 w-full">
            <div className="invisible whitespace-pre-wrap break-words pt-1 pb-3 px-3 text-[14px] leading-5 font-monlam resize-none">
              {segment.translation}
            </div>
            <textarea
              id="translation"
              name="translation"
              className="absolute inset-0 w-full h-full resize-none pt-1 pb-3 px-3 shadow-input border-[0.5px] rounded-md text-[14px] leading-6 font-monlam outline-none ring-0 bg-white overflow-y-scroll scrollbar-hide"
              value={segment.translation}
              onChange={(e) => editTranslation(segment.id, e.target.value)}
            />
          </div>
          <div className="flex-1 flex items-center justify-end">
            <button
              className=" px-3 py-1 bg-secondary-600 text-white text-sm rounded-md hover:scale-105 transition-transform duration-100 mt-1"
              onClick={() =>
                handleAccordionChange("segment-" + (segment.id + 1))
              }
            >
              Translated
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between space-x-4">
        {/* hidden element for layout*/}
        <div className=" flex items-center justify-center rounded-full opacity-0">
          <div className="w-4 h-4 rounded-full bg-primary-700"></div>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <h3 className="text-primary-900 font-medium text-md ">
            TM and MT Suggestion (3)
          </h3>
        </div>
      </div>

      <div className="space-y-2 space-x-4 pb-4 ">
        {/* First Suggestion */}
        <div className="max-h-48 overflow-y-scroll scrollbar-hide">
          {segment?.suggestions?.map((suggestion, index) => (
            <div
              className="flex items-start justify-between space-x-4 space-y-1"
              key={suggestion.text + index}
            >
              {/* hidden element for layout*/}
              <div className=" flex items-center justify-center rounded-full opacity-0">
                <div className="w-4 h-4 rounded-full bg-primary-700"></div>
              </div>
              <p className="flex-1 text-neutral-800 text-sm font-poppins">
                {segment.sourceText}
              </p>
              <div className="flex-1 flex flex-col items-end justify-start group/{swap} gap-2 pr-5 pt-2">
                <p className="flex-1 text-neutral-800 text-[12px] leading-5 font-monlam text-left w-full">
                  {suggestion.text}
                </p>
                <div className="flex justify-end gap-2 items-center w-full relative ">
                  <div className="flex-1 pl-2 text-xs text-neutral-800 opacity-0 transition-opacity duration-300 group-hover/{swap}:opacity-100 absolute left-2">
                    CTRL+{index + 1}
                  </div>
                  <p className="text-xs text-neutral-800">
                    {suggestion.source}
                  </p>
                  <span className="text-xs text-neutral-800">
                    {suggestion.language}
                  </span>
                  <span
                    className={`px-3 py-[0.5px] ${
                      suggestion.confidence <= 50
                        ? "bg-primary-700"
                        : "bg-success-500"
                    } text-white text-[12px] rounded-lg`}
                  >
                    {suggestion.confidence}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslationContent;


const TranslationContent = ({ segment, editTranslation }) => {



  return (
    <div className="w-full bg-white rounded-lg border border-primary-600 px-4">
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
        <p className="flex-1 font-poppins">{segment.sourceText}</p>
        <div className="relative flex-1 w-fit">
          <div className="invisible whitespace-pre-wrap break-words pt-1 pb-3 px-3 text-[20px] leading-5 font-monlam resize-none">
            {segment.translation}
          </div>
          <textarea
            id="translation"
            name="translation"
            className="absolute inset-0 w-full h-full resize-none pt-1 pb-3 px-3 shadow-input border-[0.5px] rounded-md text-[20px] leading-5 outline-none ring-0 bg-white overflow-y-scroll scrollbar-hide"
            value={segment.translation}
            onChange={(e) => editTranslation(segment.id, e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-start justify-between space-x-4">
        {/* hidden element for layout*/}
        <div className=" flex items-center justify-center rounded-full opacity-0">
          <div className="w-4 h-4 rounded-full bg-primary-700"></div>
        </div>
        <div className="flex-1 flex items-center justify-between mt-4 pt-4">
          <h3 className="text-primary-900 font-medium text-md ">
            TM and MT Suggestion (3)
          </h3>
        </div>
        <div className="flex-1 flex items-center justify-end mt-4 pt-4">
          <button className=" px-3 py-1 bg-secondary-600 text-white text-sm rounded-md hover:scale-105 transition-transform duration-100 -translate-y-4 mt-1">
            Translated
          </button>
        </div>
      </div>

      <div className="space-y-2 space-x-4 pb-4 ">
        {/* First Suggestion */}
        <div className="max-h-48 overflow-y-scroll scrollbar-hide">
          {segment?.suggestions?.map((suggestion, index) => (
            <div
              className="flex items-start justify-between space-x-4"
              key={suggestion.text+index}
            >
              {/* hidden element for layout*/}
              <div className=" flex items-center justify-center rounded-full opacity-0">
                <div className="w-4 h-4 rounded-full bg-primary-700"></div>
              </div>
              <p className="flex-1 text-neutral-800 text-xs font-poppins">
                {segment.sourceText}
              </p>
              <div className="flex-1 flex flex-col items-end justify-start gap-2 pr-5">
                <p className="flex-1 text-neutral-800 text-[20px] leading-7 text-right">
                  {suggestion.text}
                </p>
                <div className="flex justify-end gap-2 items-center">
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

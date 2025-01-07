
const TranslationProgress = ({
  fileName = "MonlamMelong.docx",
  jobId = "12314443424",
  sourceLanguage = "English",
  targetLanguage = "Tibetan",
  totalWords = 2043,
  completedWords = 100,
  progress = 10,
}) => {
  return (
    <div className="w-full bg-neutral-50 p-4 rounded-lg shadow-sm mt-5">
      <div className="flex items-center justify-around px-10 max-w-3xl mx-auto">
        {/* File name and job ID */}
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-neutral-950">{fileName}</h3>
          <p className="text-xs text-neutral-800">Job id: {jobId}</p>
        </div>

        {/* Language and Progress section */}
        <div className="flex items-center flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 text-xs">{sourceLanguage}</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span className="text-gray-700 text-xs">{targetLanguage}</span>
          </div>
          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute h-2 bg-green-500 transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
          <span>{progress}%</span>

        {/* Word count stats */}
        <div className="flex justify-end space-x-4">
          <div className="flex items-center space-x-2 bg-white p-2 rounded-md">
            <span className="text-neutral-800 text-xs font-medium">
              Total Word
            </span>
            <span className="text-black font-medium text-xs">
              {totalWords}
            </span>
          </div>
          <div className="flex items-center space-x-2 bg-white p-2 rounded-md">
            <span className="text-neutral-800 text-xs font-medium">
              Completed
            </span>
            <span className="text-neutral-700 font-medium text-xs">
              <span className="text-black">{completedWords} </span>/{totalWords}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationProgress;

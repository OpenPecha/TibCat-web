const TranslationHeader = ({ englishText, tibetanText, isTranslated }) => {
  return (
    <div className="border-[0.5px] border-primary-600 rounded-lg p-4 bg-neutral-50 flex items-center justify-between space-x-4">
      <div className="flex items-center jusitfy-center">
        <div className={`flex w-4 h-4 ${isTranslated ? "bg-success-500":"bg-neutral-800"} rounded-full`} />
      </div>
      <div className="flex-1 flex">
        <p className="flex-1 text-sm text-gray-900 text-left font-poppins">
          {englishText}
        </p>

        <p className="flex-1 text-xs leading-relaxed text-gray-700 text-left font-monlam">
          {tibetanText}
        </p>
      </div>
    </div>
  );
};

export default TranslationHeader;

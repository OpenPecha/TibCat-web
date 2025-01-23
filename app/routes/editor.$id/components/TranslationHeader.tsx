import { useLoaderData } from "@remix-run/react";

const TranslationHeader = ({ source_text, target_text, isTranslated }) => {
  const { documentDetails } = useLoaderData();
  return (
    <div className="border-[0.5px] border-primary-600 rounded-lg p-4 bg-neutral-50 flex items-center justify-between space-x-4">
      <div className="flex items-center jusitfy-center">
        <div
          className={`flex w-4 h-4 ${
            isTranslated ? "bg-success-500" : "bg-neutral-800"
          } rounded-full`}
        />
      </div>
      <div className="flex-1 flex">
        <p
          className={`flex-1 text-gray-900 text-left ${
            documentDetails.source_lang === "bo"
              ? "font-monlam text-xs leading-6"
              : "font-poppin text-sm"
          }`}
        >
          {source_text}
        </p>

        <p
          className={`flex-1 text-gray-900 text-left ${
            documentDetails.target_lang === "bo"
              ? "font-monlam text-xs leading-6"
              : "font-poppin text-sm"
          }`}
        >
          {target_text}
        </p>
      </div>
    </div>
  );
};

export default TranslationHeader;

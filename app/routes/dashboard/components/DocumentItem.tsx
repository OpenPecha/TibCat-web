import { Link } from "@remix-run/react";
import Exportdocs from "~/components/Exportdocs";

export const DocumentItem = ({
  document,
  isSelecting,
  selectedDocuments,
  toggleDocumentSelection,
  index,
}) => {
    const completedTranslation = (document.translated_segments/document.total_segments)*100;
  
  return (
    <div
      className={`grid grid-cols-4 items-center gap-2 relative ${
        selectedDocuments.find((p) => p.id === document.id)
          ? "bg-gray-50 rounded-lg"
          : ""
      }`}
    >
      {isSelecting && (
        <div className="absolute -left-6 top-1">
          <input
            type="checkbox"
            checked={selectedDocuments.find((p) => p.id === document.id)}
            onChange={() => toggleDocumentSelection(document)}
            className="h-4 w-4 appearance-none rounded-sm shadow-inner border border-gray-300 bg-white checked:bg-success-500 checked:border-success-500 focus:outline-none focus:ring-1 focus:ring-success-300 cursor-pointer"
          />
        </div>
      )}
      <div className="col-span-1 space-x-1">
        <span className="w-6 text-xs font-medium">{index + 1}</span>
        <Link
          to={`/editor/${document.id}`}
          className="w-48 text-xs font-medium hover:underline"
        >
          {document.title}
        </Link>
      </div>

      <div className="col-span-2 bg-gray-200 rounded-full h-2">
        <div
          className="bg-success-500 h-2 rounded-full"
          style={{ width: `${completedTranslation}%` }}
        />
      </div>
      <div className="cols-span-1 flex items-center justify-between space-x-2">
        {document.status === "completed" ? (
          <span className="flex-1 px-4 py-1 bg-success-500 text-white rounded-lg text-xs font-medium text-center">
            Translated
          </span>
        ) : (
          <span className="flex-1 px-4 py-1 bg-neutral-600 rounded-lg text-xs font-medium text-white text-center">
            {/* {document.progress}% */}
            {completedTranslation.toFixed(0)}%
          </span>
        )}
        {false ? (
          <button
            className={`flex-1 px-4 py-1 rounded-lg text-xs bg-success-700 font-medium opacity-50 text-neutral-400`}
          >
            Export
          </button>
        ) : (
          <Exportdocs documentId={document.id} />
        )}
      </div>
    </div>
  );
};

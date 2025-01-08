import { Upload, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "~/components/ui/alert";
import { ALLOWED_TYPES } from "../../../lib/constants";
export function DropZone({
  isDragging,
  error,
  onDrop,
  onDragOver,
  onDragLeave,
  fileInputRef,
  onFileSelect,
}) {
  return (
    <>
      {error && (
        <Alert variant="destructive" className="mt-2">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div
        className={`mt-4 border-2 border-dashed rounded-lg p-12 text-center ${
          isDragging ? "border-success-500 bg-green-50" : "border-primary-900"
        }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="flex flex-col items-center gap-4">
          <Upload className="w-12 h-12 text-gray-400" />
          <p className="text-lg">Drop your file to translate it with TibCat</p>
          <p className="text-gray-500">or</p>
          <button
            onClick={() => fileInputRef.current.click()}
            className="text-success-600 underline hover:text-success-700"
          >
            click here to browse
          </button>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept={ALLOWED_TYPES.join(",")}
            onChange={(e) => onFileSelect(e.target.files[0])}
          />
          <p className="text-sm text-gray-500 mt-2">
            Supported files: PDF, Word, Text (Max 10MB)
          </p>
        </div>
      </div>
    </>
  );
}

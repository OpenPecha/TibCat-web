import { useState, useRef } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import { DropZone } from "./DropZone";
import  { UploadProgress }  from "./UploadProgress";
import { FileDetails } from "./FileDetails";
import { useFileUpload } from "~/hooks/useFileUpload";

export default function FileUploadDialog() {
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const {
    uploadState,
    uploadProgress,
    error,
    fileDetails,
    handleFile,
    setUploadState,
    setFileDetails,
  } = useFileUpload();

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const renderContent = () => {
    if (uploadState === "complete") {
      return (
        <FileDetails
          fileDetails={fileDetails}
          onChooseNewFile={() => {
            setUploadState("idle");
            setFileDetails(null);
          }}
          onTranslate={() => console.log("Translate")}
        />
      );
    }

    if (uploadState === "uploading") {
      return <UploadProgress progress={uploadProgress} />;
    }

    return (
      <DropZone
        isDragging={isDragging}
        error={error}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        fileInputRef={fileInputRef}
        onFileSelect={handleFile}
      />
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-xs font-medium"
      >
        Import
        <Plus size={15} />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white max-w-2xl">
          {renderContent()}
        </DialogContent>
      </Dialog>
    </>
  );
}

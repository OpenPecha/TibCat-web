import { useState, useRef, useEffect } from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import { DropZone } from "./DropZone";
import { UploadProgress } from "./UploadProgress";
import { FileDetails } from "./FileDetails";
import { useFileUpload } from "~/hooks/useFileUpload";
import Button from "~/components/Buttons";
import { useFetcher, useLoaderData } from "@remix-run/react";
import toast from "react-hot-toast";
import Toast from "~/components/Toast";
import { LANGUAGES } from "~/lib/constants";

export default function FileUploadDialog() {
  const fetcher = useFetcher();
  const { user } = useLoaderData();
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sourceLang, setSourceLang] = useState<string>("en");
  const [targetLang, setTargetLang] = useState<string>("bo");
  const fileInputRef = useRef(null);

  const {
    uploadState,
    error,
    fileDetails,
    handleFile,
    setUploadState,
    setFileDetails,
  } = useFileUpload();
  useEffect(() => {
    if (fetcher.data && fetcher.data?.success) {
      setOpen(false);
      setUploadState("idle");
      Toast("File started processing...");
    }
  }, [fetcher.data]);

  const HandleStartTranslation = async (fileDetail, model) => {
    const formData = new FormData();
    formData.append("file_url", fileDetail.file_url);
    formData.append("user_id", user.id);
    formData.append("domain", "tibcat");
    formData.append("source_lang", sourceLang);
    formData.append("target_lang", targetLang);
    formData.append("translation_order", model);

    fetcher.submit(formData, {
      method: "post",
      action: "/api/translate", // Replace with your actual API endpoint
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const getTargetLanguages = () => {
    return Object.keys(LANGUAGES).filter((code) => code !== sourceLang);
  };

  console.log(sourceLang, targetLang);
  const renderContent = () => {
    if (uploadState === "complete") {
      return (
        <FileDetails
          fileDetails={fileDetails}
          onChooseNewFile={() => {
            setUploadState("idle");
            setFileDetails(null);
          }}
          onTranslate={HandleStartTranslation}
          translationStatus={fetcher.state}
          {...{ sourceLang, setSourceLang, targetLang, setTargetLang, getTargetLanguages }}
        />
      );
    }

    if (uploadState === "uploading") {
      return <UploadProgress />;
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
      <Button color="primary" className="" onClick={() => setOpen(true)}>
        Import
        <Plus size={15} />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white max-w-2xl">
          {renderContent()}
        </DialogContent>
      </Dialog>
    </>
  );
}

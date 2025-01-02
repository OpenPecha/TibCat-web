import { useState } from "react";
import { ALLOWED_TYPES, MAX_FILE_SIZE } from "~/lib/constants";

export function useFileUpload() {
  const [uploadState, setUploadState] = useState("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const [fileDetails, setFileDetails] = useState(null);

  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      throw new Error(`File type ${file.type} is not supported`);
    }
    if (file.size > MAX_FILE_SIZE) {
      throw new Error("File size exceeds 10MB limit");
    }
  };

  const uploadFile = async (file) => {
    setUploadState("uploading");
    setUploadProgress(0);

    return new Promise((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);

        if (progress >= 100) {
          clearInterval(interval);
          setUploadState("complete");
          setFileDetails({
            fileName: file.name,
            jobId: Math.floor(Math.random() * 1000000000000),
            wordCount: Math.floor(Math.random() * 5000),
          });
          resolve();
        }
      }, 500);
    });
  };

  const handleFile = async (file) => {
    setError("");
    try {
      validateFile(file);
      await uploadFile(file);
    } catch (err) {
      setError(err.message);
    }
  };

  return {
    uploadState,
    uploadProgress,
    error,
    fileDetails,
    handleFile,
    setUploadState,
    setFileDetails,
  };
}

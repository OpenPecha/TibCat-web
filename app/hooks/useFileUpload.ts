import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { ALLOWED_TYPES, MAX_FILE_SIZE } from "~/lib/constants";

export function useFileUpload() {
  const fetcher = useFetcher()
  const [uploadState, setUploadState] = useState("idle");
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
    try {
      setUploadState("uploading");
      const formdata = new FormData();
      formdata.append("file", file);
       fetcher.submit(formdata, {
         method: "post",
         action: "/api/uploadFile",
         encType: "multipart/form-data",
       });

    } catch (error) {
      console.error("Upload error:", error);
      setUploadState("error");
      setError(fetcher.data?.error || "Upload failed"); 
    }
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

 useEffect(() => {
   if (fetcher.state === "idle" && fetcher.data) {
     if (fetcher.data.success) {
       setUploadState("complete");
       setFileDetails({
         fileName: fetcher.data.data.fileName,
         jobId: "fetcher.data.data.jobId",
         wordCount: " fetcher.data.data.wordCount",
         file_url: fetcher.data.data.file_url,
       });
     } else {
       setUploadState("error");
       setError(fetcher.data.error || "Upload failed");
     }
   }
 }, [fetcher.state, fetcher.data]);
  return {
    uploadState,
    error,
    fileDetails,
    handleFile,
    setUploadState,
    setFileDetails,
  };
}

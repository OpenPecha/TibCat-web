import { useState, useRef } from "react";
import { Plus, Upload, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Progress } from "~/components/ui/progress";
import { Alert, AlertDescription } from "~/components/ui/alert";
import GoogleDriveIcon from "~/icons/GoogleDriveIcon";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function FileUploadDialog() {
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState("idle"); // idle, uploading, complete
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const [fileDetails, setFileDetails] = useState(null);
  const fileInputRef = useRef(null);

  const validateFile = (file) => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      throw new Error(`File type ${file.type} is not supported`);
    }
    if (file.size > MAX_FILE_SIZE) {
      throw new Error("File size exceeds 10MB limit");
    }
  };

  // Mock upload function - replace with actual API call
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
          // Mock response - replace with actual API response
          setFileDetails({
            fileName: file.name,
            jobId: Math.floor(Math.random() * 1000000000000),
            wordCount: Math.floor(Math.random() * 5000),
            models: [
              {
                name: "Melong",
                description: "Recommended for Regular literature",
              },
              {
                name: "Mitra",
                description: "Recommended for Buddhist literature",
              },
            ],
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

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const renderContent = () => {
    if (uploadState === "complete") {
      return (
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-4">File Description</h3>
              <div className="space-y-2">
                <p>FileName: {fileDetails.fileName}</p>
                <p>Job id: {fileDetails.jobId}</p>
                <p>Total Word Count: {fileDetails.wordCount}</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">
                Order your Machine Translation Model
              </h4>
              <div className="space-y-2">
                {fileDetails.models.map((model) => (
                  <div
                    key={model.name}
                    className="flex items-center gap-2 p-3 border rounded-lg"
                  >
                    <span className="text-yellow-500">✦</span>
                    <span className="font-medium">{model.name}</span>
                    <span className="text-sm text-gray-500">
                      *{model.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => {
                setUploadState("idle");
                setFileDetails(null);
              }}
              className="text-gray-600 hover:text-gray-800"
            >
              Choose Different File
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
              Translate
            </button>
          </div>
        </div>
      );
    }

    if (uploadState === "uploading") {
      return (
        <div className="p-8 space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Uploading File...</h3>
            <Progress value={uploadProgress} className="h-2" />
            <p className="text-sm text-gray-500 mt-2">
              {uploadProgress}% complete
            </p>
          </div>
        </div>
      );
    }

    return (
      <>
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div
          className={`mt-6 border-2 border-dashed rounded-lg p-12 text-center ${
            isDragging ? "border-green-500 bg-green-50" : "border-gray-300"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setIsDragging(false);
          }}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center gap-4">
            <Upload className="w-12 h-12 text-gray-400" />
            <p className="text-lg">Drop your file here</p>
            <p className="text-gray-500">or</p>
            <button
              onClick={() => fileInputRef.current.click()}
              className="text-green-600 underline hover:text-green-700"
            >
              click here to browse
            </button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept={ALLOWED_TYPES.join(",")}
              onChange={(e) => handleFile(e.target.files[0])}
            />
            <p className="text-sm text-gray-500 mt-2">
              Supported files: PDF, Word, Excel, Text (Max 10MB)
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-2">
          <span className="text-gray-500">Other</span>
          <button className="flex items-center gap-2 text-green-600 hover:text-green-700">
            <GoogleDriveIcon className="w-6 h-6" />
            import from Gdrive
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-green-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-xs font-medium"
      >
        Import
        <Plus size={20} />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              {uploadState !== "complete" && "Drop your file to translate it with TibCat"}
            </DialogTitle>
          </DialogHeader>
          {renderContent()}
        </DialogContent>
      </Dialog>
    </>
  );
}

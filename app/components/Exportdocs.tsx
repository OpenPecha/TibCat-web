import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import {
  SeperatePageIcon,
  SplitPageIcon,
  TargetPageIcon,
} from "~/icons/DocumentIcons";
import { fileTypes } from "~/lib/constants";
type ExportDocsProps = {
  documentId: string | number; 
};

const  Exportdocs: React.FC<ExportDocsProps> = ({ documentId }) => {
  const [open, setOpen] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState("separate");
  const [selectedFileType, setSelectedFileType] = useState("docx");

  const formatOptions = [
    {
      id: "separate",
      label: "Seperate Source and Target",
      icon: SeperatePageIcon,
    },
    {
      id: "split",
      label: "Both Source and Target",
      icon: SplitPageIcon,
    },
    {
      id: "full_target",
      label: "Only Target Text",
      icon: TargetPageIcon,
    },
  ];

  const handleExport = async () => {
    const link = document.createElement("a");
    link.href = `https://tibcat-backend.onrender.com/export/export-doc/${documentId}?export_type=${selectedFormat}&file_format=${selectedFileType}`;
    link.download = "filename";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`flex-1 px-4 py-1 rounded-lg text-xs bg-success-700 text-white font-medium text-center`}
      >
        Export
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white w-fit">
          <div className=" border border-dashed border-primary-900 rounded-lg bg-white p-6 m-4">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-500">
                    FileName : MonIamMelong.docx
                  </div>
                  <div className="text-sm text-gray-500">
                    Job id : 12314443424
                  </div>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-normal text-center">
                Choose one of the following format
              </h2>

              {/* Format Selection */}
              <div className="flex justify-center space-x-8">
                {formatOptions.map((option) => (
                  <label
                    key={option.id}
                    className="flex flex-col items-center space-y-2 cursor-pointer"
                  >
                    <option.icon />

                    {/* Radio Button and Label */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="format"
                        value={option.id}
                        checked={selectedFormat === option.id}
                        onChange={(e) => setSelectedFormat(e.target.value)}
                        className="peer hidden"
                      />
                      <div>
                        <div
                          className={`w-4 h-4 rounded-full border-2 transition-colors ${
                            selectedFormat === option.id
                              ? "border-success-500 bg-success-500"
                              : "border-neutral-300"
                          }`}
                        ></div>
                      </div>
                      <span className={`text-sm text-nowrap`}>{option.label}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* File Type Selection */}
              <div className="flex justify-center space-x-4">
                {fileTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedFileType(type)}
                    className={`px-4 py-2 text-md rounded-lg border uppercase ${
                      selectedFileType === type
                        ? "border-green-600 text-green-600"
                        : "border-gray-300 text-gray-600 hover:border-gray-400"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Download Button */}
              <div className="flex justify-center">
                <button
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  onClick={handleExport}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Exportdocs;

import React, { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { SeperatePageIcon, SplitPageIcon, TargetPageIcon } from "~/icons/DocumentIcons";

const Exportdocs = () => {
    const [open, setOpen] = useState(false)
  const [selectedFormat, setSelectedFormat] = useState("separate");
  const [selectedFileType, setSelectedFileType] = useState("DOCX");

  const formatOptions = [
    {
      id: "separate",
      label: "Seperate Source and Target",
      icon: SeperatePageIcon
    },
    {
      id: "both",
      label: "Both Source and Target",
      icon: SplitPageIcon
    },
    {
      id: "target",
      label: "Only Target Text",
      icon: TargetPageIcon
    },
  ];

  const fileTypes = ["DOCX", "PDF", "TXT"];

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className={`w-1/2 px-4 py-1 rounded-lg text-xs bg-success-700 text-white font-medium`}
        >
          Export
        </button>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="bg-white">
            <div className=" border border-dashed border-primary-900 rounded-lg mx-auto bg-white p-6">
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
                        <option.icon
                        />

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
                        <span className={`text-sm `}>{option.label}</span>
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
                      className={`px-4 py-2 text-md rounded-lg border ${
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
                  <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
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

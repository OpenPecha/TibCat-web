import FileIcon from "~/icons/FileIcon";
import ModelList from "./ModelList";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";

export function FileDetails({
  fileDetails,
  onChooseNewFile,
  onTranslate,
  translationStatus,
  sourceLang,
  setSourceLang,
  targetLang,
  setTargetLang,
  getTargetLanguages,
}) {
  const [order, setOrder] = useState(["Melong", "Mitra"]);

  return (
    <div className="border border-dashed border-primary-900 rounded-lg p-8 m-2">
      <div className="flex items-center justify-around mb-8">
        <div className="flex-1">
          <FileIcon height={100} width={100} className="mx-auto" />
        </div>
        <div className="flex-1">
          <div>
            <h3 className="text-xl font-semibold mb-1">File Description</h3>
            <div className="">
              <p className="text-sm">
                <span className="text-sm text-neutral-800">FileName:</span>{" "}
                {fileDetails.fileName}
              </p>
              <p className="text-sm">
                <span className="text-sm text-neutral-800">Job id:</span>{" "}
                {/* {fileDetails.jobId} */}
                jd12333
              </p>
              <LanguageSelector
                {...{
                  sourceLang,
                  setSourceLang,
                  targetLang,
                  setTargetLang,
                  getTargetLanguages,
                }}
              />
            </div>
          </div>

          <div className="mt-1">
            <h4 className="text-sm text-neutral-800 mb-0">
              Order your Machine Translation Model
            </h4>
            <ModelList handleOrderChange={setOrder} />
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onChooseNewFile}
          className="text-neutral-800 hover:text-neutral-900 px-2 py-2 shadow-inner rounded-lg flex items-around border"
        >
          <IoIosArrowBack className="w-6 h-6" />
          Choose Different File
        </button>
        {translationStatus === "idle" ? (
          <button
            onClick={() => onTranslate(fileDetails, order)}
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
          >
            Translate
          </button>
        ) : (
          <div className="flex items-center justify-center bg-green-500 px-6 py-2 rounded-lg">
            <div className="w-6 h-6 border-4 border-primary-50 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
}

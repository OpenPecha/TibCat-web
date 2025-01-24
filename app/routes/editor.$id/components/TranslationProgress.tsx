import { FaArrowRightLong } from "react-icons/fa6";
import {useLoaderData} from '@remix-run/react'
import { useEffect, useState } from "react";
import { getTranslationProgress } from "../utils/getTranslationProgress";
const TranslationProgress = () => {
  const { documentDetails, translationProgress } = useLoaderData();
  // const segments = documentDetails.segments;
  // const wordDelimiter = documentDetails.source_lang === "bo" ? "་" : " ";
  // const totalWords = segments.reduce((sum, segment) => {
  //   return sum + segment.source_text?.split(wordDelimiter).length;
  // }, 0);

  // // Calculate completed word count
  // const completedWords = segments.reduce((sum, segment) => {
  //   return !!segment.target_text
  //     ? sum + segment.source_text?.split(wordDelimiter).length
  //     : sum;
  // }, 0);
  const totalWords = translationProgress?.total_word;
  const completedWords = translationProgress?.translated_word;
  const completedPercentage = ((completedWords / totalWords) * 100).toFixed(1);
  return (
    <div className="w-full bg-neutral-50 p-4 rounded-lg shadow-sm mt-5">
      <div className="flex items-center justify-around px-10 max-w-3xl mx-auto">
        {/* File name and job ID */}
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-neutral-950">
            {documentDetails.title}
          </h3>
          <p className="text-xs text-neutral-800">Job id: {"jobId"}</p>
        </div>

        {/* Language and Progress section */}
        <div className="flex items-center flex-col space-y-1 min-w-48">
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 text-xs">
              {documentDetails.source_lang === "en" ? "English" : "Tibetan"}
            </span>
            <FaArrowRightLong className="text-neutral-950" />
            <span className="text-gray-700 text-xs">
              {documentDetails.target_lang === "en" ? "English" : "Tibetan"}
            </span>
          </div>
          <div className="flex items-center space-x-1 w-full">
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner ">
              <div
                className="absolute h-2 bg-success-500 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${completedPercentage}%` }}
              />
            </div>
            <span className="text-xs">{completedPercentage}%</span>
          </div>
        </div>

        {/* Word count stats */}
        <div className="flex justify-end space-x-4">
          <div className="flex items-center space-x-2 bg-white p-2 rounded-md">
            <span className="text-neutral-800 text-xs font-medium">
              Total Word
            </span>
            <span className="text-black font-medium text-xs">{totalWords}</span>
          </div>
          <div className="flex items-center space-x-2 bg-white p-2 rounded-md">
            <span className="text-neutral-800 text-xs font-medium">
              Completed
            </span>
            <span className="text-neutral-700 font-medium text-xs">
              <span className="text-black">{completedWords} </span>/{totalWords}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranslationProgress;

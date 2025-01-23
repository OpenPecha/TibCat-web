import React from 'react'

export default function SuggestionCount({ translationSuggestions, fallbackSuggestions }) {
    return (
      <>
        {translationSuggestions && translationSuggestions?.length !== 0 && (
          <div className="flex items-start justify-between space-x-4">
            {/* hidden element for layout*/}
            <div className="flex items-center justify-center rounded-full opacity-0">
              <div className="w-4 h-4 rounded-full bg-primary-700"></div>
            </div>
            <div className="flex-1 flex items-center justify-between">
              <h3 className="text-primary-900 font-medium text-md">
                TM and MT Suggestions {translationSuggestions?.length}
              </h3>
            </div>
          </div>
        )}
        {fallbackSuggestions &&
          (fallbackSuggestions?.melong || fallbackSuggestions?.mitra) && (
            <div className="flex items-start justify-between space-x-4">
              {/* hidden element for layout*/}
              <div className="flex items-center justify-center rounded-full opacity-0">
                <div className="w-4 h-4 rounded-full bg-primary-700"></div>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <h3 className="text-primary-900 font-medium text-md">
                  TM and MT Suggestions{" "}
                  {fallbackSuggestions?.melong && fallbackSuggestions?.mitra
                    ? 2
                    : 1}
                </h3>
              </div>
            </div>
          )}
      </>
    );
}

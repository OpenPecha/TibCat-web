import { useLoaderData, useSearchParams } from "@remix-run/react";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SortSelect } from "./SortSelect";
import { ActionButtons } from "./ActionButtons";
import { DocumentItem } from "./DocumentItem";
import { Pagination } from "./Pagination";
import { ITEM_PER_PAGES } from "~/lib/constants";

export default function Dashboard() {
  const { filteredDocuments } = useLoaderData();
  const [isSelecting, setisSelecting] = useState(false);
  const [param, setParam] = useSearchParams();

  const [selectedDocuments, setSelectedDocuments] = useState([]);

  const searchQuery = param.get("search") || "";
  const setSearchQuery = (value: string) => {
    setParam((p) => {
      p.set("search", value);
      return p;
    });
  };
  const currentPage = param.get("page") || 1;

  const sortBy = param.get("sort") || "";
  const setSortBy = (value: string) => {
    setParam((p) => {
      p.set("sort", value);
      return p;
    });
  };
  const setCurrentPage = (value: number) => {
    setParam((p) => {
      p.set("page", value);
      return p;
    });
  };
  const totalPages = Math.ceil(filteredDocuments.length / ITEM_PER_PAGES);
  const startIndex = (currentPage - 1) * ITEM_PER_PAGES;
  const displayDocuments = filteredDocuments.slice(
    startIndex,
    startIndex + ITEM_PER_PAGES
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const toggleDocumentSelection = (document: any) => {
    setSelectedDocuments((prev) => {
      const isSelectedProject = prev.find((p) => p.id === document.id);
      if (isSelectedProject) {
        return prev.filter((p) => p.id !== document.id);
      } else {
        return [...prev, document];
      }
    });
  };

  const handleSelectAll = () => {
    if (selectedDocuments.length === displayDocuments.length) {
      setSelectedDocuments([]);
    } else {
      setSelectedDocuments(displayDocuments);
    }
  };

  const handleDelete = () => {
    // this should do a api call instead
    console.log("deleting");
    setSelectedDocuments([]);
    setisSelecting(false);
  };

  const cancelSelection = () => {
    setSelectedDocuments([]);
    setisSelecting(false);
  };
  return (
    <div className="flex items-center justify-center">
      <div className="w-full p-10 space-y-6">
        <div className="text-xl font-semibold">Projects</div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center justify-start space-x-2">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setCurrentPage={setCurrentPage}
            />
            <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
          </div>
          <ActionButtons
            isSelecting={isSelecting}
            setisSelecting={setisSelecting}
            selectedDocuments={selectedDocuments}
            displayDocuments={displayDocuments}
            handleSelectAll={handleSelectAll}
            handleDelete={handleDelete}
            cancelSelection={cancelSelection}
          />
        </div>

        <div className="space-y-6">
          {filteredDocuments.length === 0 && (
            <div className="text-center text-gray-600">No projects found</div>
          )}
          {displayDocuments
            .sort((a, b) => {
              if (sortBy === "date") {
                return new Date(b.created_at) - new Date(a.created_at);
              } else if (sortBy === "file_type") {
                const extA = a.title.split(".").pop().toLowerCase(); 
                const extB = b.title.split(".").pop().toLowerCase(); 
                return extA.localeCompare(extB);
              }
              return 0;
            })
            .map((document: any, index) => (
              <DocumentItem
                key={document.id}
                document={document}
                isSelecting={isSelecting}
                selectedDocuments={selectedDocuments}
                toggleDocumentSelection={toggleDocumentSelection}
                index={index}
              />
            ))}
        </div>

        {filteredDocuments.length > 7 && (
          <Pagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

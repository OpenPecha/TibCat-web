import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { SortSelect } from "./SortSelect";
import { ActionButtons } from "./ActionButtons";
import { ProjectItem } from "./ProjectItem";
import { Pagination } from "./Pagination";

export default function Dashboard() {
  const allProjects = useLoaderData();
  const [isSelecting, setisSelecting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const itemsPerPage = 7;

  const filteredProjects = allProjects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProjects = filteredProjects.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  const toggleProjectSelection = (project) => {
    console.log("Toggling project selection:", project);
    setSelectedProjects((prev) => {
      const existingProject = prev.find((p) => p.id === project.id); 
      if (existingProject) {
        return prev.filter((p) => p.id !== project.id);
      } else {
        return [...prev, project];
      }
    });
  };


  const handleSelectAll = () => {
    if (selectedProjects.size === displayedProjects.length) {
      setSelectedProjects([]);
    } else {
      setSelectedProjects(displayedProjects);
    }
  };

  const handleDelete = () => {
    console.log("Deleting projects:", Array.from(selectedProjects));
    setSelectedProjects([]);
    setisSelecting(false);
  };

  const cancelSelection = () => {
    setSelectedProjects([]);
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
            <SortSelect />
          </div>
          <ActionButtons
            isSelecting={isSelecting}
            setisSelecting={setisSelecting}
            selectedProjects={selectedProjects}
            displayedProjects={displayedProjects}
            handleSelectAll={handleSelectAll}
            handleDelete={handleDelete}
            cancelSelection={cancelSelection}
          />
        </div>

        <div className="space-y-6">
          {displayedProjects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              isSelecting={isSelecting}
              selectedProjects={selectedProjects}
              toggleProjectSelection={toggleProjectSelection}
            />
          ))}
        </div>

        {filteredProjects.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}

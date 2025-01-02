import { Plus } from "lucide-react";
import DeleteConfirmationModal from "./DeleteModal";
import FileUploadDialog from "./FileUploadDialog";
export const ActionButtons = ({
  isSelecting,
  setisSelecting,
  selectedProjects,
  displayedProjects,
  handleSelectAll,
  handleDelete,
  cancelSelection,
}) => (
  <div className="flex items-center justify-center space-x-2">
    {!isSelecting ? (
      <button
        className="bg-surface-light text-black px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-inner"
        onClick={() => setisSelecting(true)}
      >
        Select
      </button>
    ) : (
      <div className="flex items-center gap-2">
        <button
          className="bg-surface-light text-black px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-inner"
          onClick={cancelSelection}
        >
          Cancel
        </button>
        <DeleteConfirmationModal
          selectedProjects={selectedProjects}
          onDelete={handleDelete}
          onCancel={cancelSelection}
        />
        <button
          className="bg-surface-light text-black px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-inner"
          onClick={handleSelectAll}
        >
          {selectedProjects.size === displayedProjects.length
            ? "Deselect All"
            : "Select All"}
        </button>
      </div>
    )}
    {/* <button className="bg-success-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-xs font-medium">
      Import
      <Plus size={20} />
    </button> */}
    <FileUploadDialog />
  </div>
);

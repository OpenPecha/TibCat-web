import { MdDelete } from "react-icons/md";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { BsExclamationCircle } from "react-icons/bs";

const DeleteConfirmationModal = ({ selectedProjects, onDelete, onCancel }) => {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    onDelete();
    setOpen(false);
  };

  return (
    <>
      <button
        className={`bg-surface-light text-black px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-inner ${
          selectedProjects.length === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={() => setOpen(true)}
        disabled={selectedProjects.length === 0}
      >
        Delete <MdDelete /> {selectedProjects.length ? `(${selectedProjects.length})` : ""}
      </button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-failure-100 flex items-center justify-center">
              <BsExclamationCircle className="w-8 h-8 text-failure-500" />
            </div>

            <AlertDialogTitle className="text-xl font-semibold text-center">
              Are you sure you want to Delete this File?
            </AlertDialogTitle>
          </div>

          <AlertDialogFooter className="flex gap-4 justify-center mt-6">
            <AlertDialogAction
              className="bg-failure-500 hover:bg-failure-600 text-white px-6 py-2 rounded-lg border-0"
              onClick={handleDelete}
            >
              Delete
            </AlertDialogAction>
            <AlertDialogCancel
              className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-6 py-2 rounded-lg border-0"
              onClick={onCancel}
            >
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteConfirmationModal;

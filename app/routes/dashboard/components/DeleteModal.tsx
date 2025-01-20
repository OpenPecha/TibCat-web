import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { BsExclamationLg } from "react-icons/bs";
import Button from "~/components/Buttons";
import { useFetcher } from "@remix-run/react";
import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import toast from "react-hot-toast";
import Toast from "~/components/Toast";

const DeleteConfirmationModal = ({ selectedDocuments, onDelete, onCancel }) => {
  const fetcher = useFetcher();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      if (fetcher.data?.success) {
      const documentTitles = selectedDocuments.map((project) => project.title).join(", ");

        onDelete();
        Toast(`${documentTitles} Deleted Successfully`);

      }
    }
  }, [fetcher.state]);

  const handleDelete = () => {
    const documentIds = selectedDocuments.map((project) => project.id);
    const formData = new FormData();
    formData.append("documentIds", JSON.stringify(documentIds));
    fetcher.submit(
      formData,
      {
        method: "delete",
        action: "/api/deleteDocs", // Replace with your actual API endpoint
      }
    );
    setOpen(false);
  };

  return (
    <>
      <Button
        color="secondary"
        className="px-6 py-2 text-sm font-medium"
        onClick={() => setOpen(true)}
        disabled={selectedDocuments.length === 0}
      >
        Delete <MdDelete />{" "}
        {selectedDocuments.length ? `(${selectedDocuments.length})` : ""}
      </Button>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className=" bg-white p-6 rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-failure-400 flex items-center justify-center border-4 border-failure-300">
              <BsExclamationLg className="w-7 h-7 text-failure-600" />
            </div>

            <AlertDialogTitle className="text-xl font-medium text-center">
              Are you sure you want to Delete Folowing{" "}
              {selectedDocuments.length === 1 ? "File" : "Files"}?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm text-center text-neutral-900">
              {selectedDocuments.map((project) => (
                <span key={project.id}>{project.title}, </span>
              ))}
            </AlertDialogDescription>
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

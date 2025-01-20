import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { IoIosArrowBack } from "react-icons/io";
import Exportdocs from "~/components/Exportdocs";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const document_id = params.id;
  return {document_id}
}
interface LoaderData {
  document_id: string |number;
}

export default function route() {
  const {document_id} = useLoaderData<LoaderData>();
    return (
      <>
        <div className="flex justify-between items-center p-4">
          <Link
            to="/dashboard"
            className="text-neutral-800 hover:text-neutral-900 hover:shadow-inner p-1 rounded-md border"
          >
            <IoIosArrowBack className="w-4 h-4" />
          </Link>
          <div className="bg-success-700 text-white text-sm px-4 py-1 rounded-lg">
            <Exportdocs documentId={document_id} />
          </div>
        </div>
        <div className="border-t border-t-neutral-600" />
        <Outlet />
      </>
    );
}

import { Link, Outlet } from "@remix-run/react";
import { IoIosArrowBack } from "react-icons/io";
import Exportdocs from "~/components/Exportdocs";

export default function route() {
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
            <Exportdocs />
          </div>
        </div>
        <div className="border-t border-t-neutral-600" />
        <Outlet />
      </>
    );
}

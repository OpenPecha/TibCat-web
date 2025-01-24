
import { getUserSession } from "~/services/session.server";
import Dashboard from "./components/Dashboard";
import { LoaderFunction, redirect } from "@remix-run/node";
import { getDocuments } from "~/api/Documents";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUserSession(request);
  if (!user) {
    return redirect("/login");
  }
  const documents = await getDocuments(user.id)
  const searchQuery = new URL(request.url).searchParams.get("search") || "";
  const filteredDocuments = documents.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return {
    user,
    filteredDocuments,
  };
};

export default function route() {
  return <Dashboard /> 
}

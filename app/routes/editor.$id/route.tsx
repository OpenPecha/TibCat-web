import { LoaderFunction } from "@remix-run/node";
import SegmentList from "./components/SegmentList";
import { getDocumentDetails } from "~/api/Documents";

export const loader: LoaderFunction = async ({ request, params }) => {
  const docxId = params.id;
  const documentDetails = await getDocumentDetails(docxId);
  console.log(documentDetails);
  return { documentDetails };
};
export default function route() {
  return <SegmentList />;
}

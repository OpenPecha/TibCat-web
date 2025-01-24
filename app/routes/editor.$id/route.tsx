import { LoaderFunction } from "@remix-run/node";
import SegmentList from "./components/SegmentList";
import { getDocumentDetails } from "~/api/Documents";
import { getTranslationProgress } from "./utils/getTranslationProgress";

export const loader: LoaderFunction = async ({ request, params }) => {
  const docxId = params.id;
  const documentDetails = await getDocumentDetails(docxId);
  const translationProgress = await getTranslationProgress(docxId);
  return { documentDetails, translationProgress };
};
export default function route() {
  return <SegmentList />;
}

import { useState } from "react";
import {useLoaderData} from "@remix-run/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import TranslationHeader from "./TranslationHeader";
import TranslationContent from "./TranslationContent";
import TranslationProgress from "./TranslationProgress";

const TranslationAccordion = () => {
  const { documentDetails } = useLoaderData();
  console.log("documentDetails", documentDetails.segments);
  const [activeSegment, setActiveSegment] = useState('0');

  const handleAccordionChange = (value:string) => {
    setActiveSegment(value);
  };

  const handleActiveTab = () => {
    setActiveSegment(prev=>{
      const current=parseInt(prev);
      return String(current+1);
    });
  }
  // const updateTranslation = (segmentId, suggestionIndex) => {
  //   setSegments(
  //     segments.map((segment) => {
  //       if (segment.id === segmentId) {
  //         const currentTranslation = segment.translation;
  //         const newTranslation = segment.suggestions[suggestionIndex].text;

  //         // Swap the current translation with the selected suggestion
  //         const updatedSuggestions = [...segment.suggestions];
  //         updatedSuggestions[suggestionIndex] = {
  //           ...segment.suggestions[suggestionIndex],
  //           text: currentTranslation,
  //         };

  //         return {
  //           ...segment,
  //           translation: newTranslation,
  //           suggestions: updatedSuggestions,
  //         };
  //       }
  //       return segment;
  //     })
  //   );
  // };

  if(documentDetails.length===0) return null;

  return (
    <div className="w-full mx-auto p-4 max-w-6xl px-10 ">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-1"
        value={String(activeSegment)}
        onValueChange={handleAccordionChange}
      >
        {documentDetails.segments.map((segment, index) => (
          <AccordionItem key={segment.id} value={String(index)}>
            <AccordionTrigger className="hover:no-underline">
              <TranslationHeader
                englishText={segment.source_text}
                tibetanText={segment.target_text}
                isTranslated={!!segment.target_text}
              />
            </AccordionTrigger>
            <AccordionContent>
              <TranslationContent
                segment={segment}
                handleActiveTab={handleActiveTab}
                updateTranslation={()=>{}}
                segments={documentDetails.segments}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <TranslationProgress />
    </div>
  );
};

export default TranslationAccordion;

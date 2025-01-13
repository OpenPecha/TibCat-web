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
  const {translationData}=useLoaderData();
  const [segments, setSegments] = useState(translationData);
  const [activeSegment, setActiveSegment] = useState('0');

  const handleAccordionChange = (value:string) => {
    setActiveSegment(value);
  };

  const handleTranslationChange = (segmentId:string, newTranslation:string) => {
    // here we are going to change the translation of a segment given my user
    setSegments(
      segments.map((segment) =>
        segment.id === segmentId
          ? { ...segment, translation: newTranslation, isTranslated: true }
          : segment
      )
    );

    setActiveSegment(prev=>{
      const current=parseInt(prev);
      return String(current+1);
    });
  }
  const updateTranslation = (segmentId, suggestionIndex) => {
    setSegments(
      segments.map((segment) => {
        if (segment.id === segmentId) {
          const currentTranslation = segment.translation;
          const newTranslation = segment.suggestions[suggestionIndex].text;

          // Swap the current translation with the selected suggestion
          const updatedSuggestions = [...segment.suggestions];
          updatedSuggestions[suggestionIndex] = {
            ...segment.suggestions[suggestionIndex],
            text: currentTranslation,
          };

          return {
            ...segment,
            translation: newTranslation,
            suggestions: updatedSuggestions,
          };
        }
        return segment;
      })
    );
  };

  const splitSegment = (segmentId:string,index:number) => {
    const segment = segments.find((s) => s.id === segmentId);
    if (!segment) return;

    // Split source text
    const words = segment.sourceText.split(" ");
    const firstHalf = words.slice(0, index).join(" ");
    const secondHalf = words.slice(index).join(" ");

    // Split translation (if it exists)
    const translationWords = segment.translation.split(" ");
    const translationMidpoint = Math.ceil(translationWords.length / 2);
    const firstTranslation = translationWords
      .slice(0, translationMidpoint)
      .join(" ");
    const secondTranslation = translationWords
      .slice(translationMidpoint)
      .join(" ");

    // Split suggestions
    const splitSuggestions = (suggestions) => {
      return suggestions.map((suggestion) => {
        const suggestionWords = suggestion.text.split(" ");
        const suggestionMidpoint = Math.ceil(suggestionWords.length / 2);
        return [
          {
            ...suggestion,
            text: suggestionWords.slice(0, suggestionMidpoint).join(" "),
          },
          {
            ...suggestion,
            text: suggestionWords.slice(suggestionMidpoint).join(" "),
          },
        ];
      });
    };

    const firstSuggestions = splitSuggestions(segment.suggestions).map(
      (pair) => pair[0]
    );
    const secondSuggestions = splitSuggestions(segment.suggestions).map(
      (pair) => pair[1]
    );

    const newSegments = [
      {
        id: segment.id,
        sourceText: firstHalf,
        order:segment.order,
        translation: firstTranslation,
        suggestions: firstSuggestions,
      },
      {
        id: parseFloat(segment.id) + 0.1,
        order: parseFloat(segment.order) + 0.1,
        sourceText: secondHalf,
        translation: secondTranslation,
        suggestions: secondSuggestions,
      },
    ];
    
    setSegments(
      segments
        .map((s) => (s.id === segmentId ? newSegments[0] : s))
        .concat(newSegments[1])
    );
  };

  const editTranslation = (segmentId, newTranslation) => {
    setSegments((prevSegments) =>
      prevSegments.map((segment) =>
        segment.id === segmentId
          ? { ...segment, translation: newTranslation }
          : segment
      )
    );
  };
  if(translationData.length===0) return null;

  return (
    <div className="w-full mx-auto p-4 max-w-6xl px-10 ">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-1"
        value={String(activeSegment)}
        onValueChange={handleAccordionChange}
      >
        {segments.sort((a,b)=>a.order-b.order).map((segment, index) => (
          <AccordionItem key={segment.id} value={String(index)}>
            <AccordionTrigger className="hover:no-underline">
              <TranslationHeader
                englishText={segment.sourceText}
                tibetanText={segment.translation}
                isTranslated={segment.isTranslated}
              />
            </AccordionTrigger>
            <AccordionContent>
              <TranslationContent
                segment={segment}
                editTranslation={editTranslation}
                handleTranslationChange={handleTranslationChange}
                splitSegment={splitSegment}
                updateTranslation={updateTranslation}
                segments={segments}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <TranslationProgress segments={segments} />
    </div>
  );
};

export default TranslationAccordion;

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import TranslationHeader from "./TranslationHeader";
import TranslationContent from "./TranslationContent";

const TranslationAccordion = () => {
  const [segments, setSegments] = useState([
    {
      id: 1,
      sourceText:
        "I am passionate about contributing to an environment that values diverse voices and perspectives, and I believe my experiences will enrich the collaborative and dynamic culture",
      translation:
        "ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།ཡིད་ཆེས་ཡོད།ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
      suggestions: [
        {
          text: "ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 90,
        },
        {
          text: "ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 40,
        },
      ],
    },
    {
      id: 2,
      sourceText:
        "I strive to create meaningful relationships and foster collaboration across diverse teams to achieve shared goals.",
      translation:
        "ང་ནི་གཅིག་ཁྱབ་དང་རང་འགུལ་བསྒྱུར་ནས་མཉམ་ལས་དང་ལྷན་འཛོམས་སྤྱོད་མཁན་ཡིན།",
      suggestions: [
        {
          text: "ང་ནི་གཅིག་ཁྱབ་དང་རང་འགུལ་བསྒྱུར་ནས་མཉམ་ལས་དང་ལྷན་འཛོམས་སྤྱོད་མཁན་ཡིན།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 85,
        },
        {
          text: "ང་ནི་དམ་དོན་དང་ལྷན་འཛོམས་སྤྱོད་མཁན་ཡིན།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 78,
        },
      ],
    },
    {
      id: 3,
      sourceText:
        "Effective communication and empathy are key to building trust and achieving success in any collaborative environment.",
      translation:
        "བསམ་འདུན་དང་སྣང་བའི་སྐོར་ལ་བསྐོས་ནས་དམ་དོན་མཉམ་སྒྲུབ་གཏོང་བ་མི་ཐུབ།",
      suggestions: [
        {
          text: "བསམ་འདུན་དང་སྣང་བའི་སྐོར་ལ་བསྐོས་ནས་དམ་དོན་མཉམ་སྒྲུབ་གཏོང་བ་མི་ཐུབ།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 88,
        },
        {
          text: "ང་ནི་སྤྱིར་ཀ་ལས་ཀ་ནས་འདུ་བའི་ཐོབ་ཐང་གཅིག་གཏོང་མཁན་ཡིན།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 82,
        },
      ],
    },
  ]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey) {
        const activeSegment = segments[segments.length - 1];

        switch (e.key) {
          case "1":
            if (activeSegment?.suggestions[0]) {
              updateTranslation(
                activeSegment.id,
                activeSegment.suggestions[0].text
              );
            }
            break;
          case "2":
            if (activeSegment?.suggestions[1]) {
              updateTranslation(
                activeSegment.id,
                activeSegment.suggestions[1].text
              );
            }
            break;
          case "s":
            if (activeSegment) {
              splitSegment(activeSegment.id);
            }
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [segments]);

  const updateTranslation = (segmentId, newTranslation) => {
    setSegments(
      segments.map((segment) =>
        segment.id === segmentId
          ? { ...segment, translation: newTranslation }
          : segment
      )
    );
  };

  const splitSegment = (segmentId) => {
    const segment = segments.find((s) => s.id === segmentId);
    if (!segment) return;

    const words = segment.sourceText.split(" ");
    const midpoint = Math.ceil(words.length / 2);

    const firstHalf = words.slice(0, midpoint).join(" ");
    const secondHalf = words.slice(midpoint).join(" ");

    const newSegments = [
      {
        id: segment.id,
        sourceText: firstHalf,
        translation: "",
        suggestions: [],
      },
      {
        id: segments.length + 1,
        sourceText: secondHalf,
        translation: "",
        suggestions: [],
      },
    ];

    setSegments(
      segments
        .map((s) => (s.id === segmentId ? newSegments[0] : s))
        .concat(newSegments[1])
    );
  };

  return (
    <div className="w-full mx-auto p-4 max-w-6xl">
      <Accordion type="single" collapsible className="w-full space-y-1">
        {segments.map((segment) => (
          <AccordionItem key={segment.id} value={`segment-${segment.id}`}>
            <AccordionTrigger className="hover:no-underline">
              <TranslationHeader
                englishText={segment.sourceText}
                tibetanText={segment.translation}
              />
            </AccordionTrigger>
            <AccordionContent>
              <TranslationContent segment={segment} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default TranslationAccordion;

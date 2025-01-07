import React, { useEffect, useState } from "react";
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
  const [segments, setSegments] = useState([
    {
      id: 1,
      sourceText:
        "I am passionate about contributing to an environment that values diverse voices and perspectives, and I believe my experiences will enrich the collaborative and dynamic culture",
      translation:
        "ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།ཡིད་ཆེས་ཡོད།ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
      suggestions: [
        {
          text: "ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 90,
        },
        {
          text: "མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 40,
        },
      ],
    },
    {
      id: 2,
      sourceText:
        "I am passionate about contributing to an environment that values diverse voices and perspectives, and I believe my experiences will enrich the collaborative and dynamic culture",
      translation:
        "ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།ཡིད་ཆེས་ཡོད།ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
      suggestions: [
        {
          text: "ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 90,
        },
        {
          text: "མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 40,
        },
      ],
    },
    {
      id: 3,
      sourceText:
        "I am passionate about contributing to an environment that values diverse voices and perspectives, and I believe my experiences will enrich the collaborative and dynamic culture",
      translation:
        "ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།ཡིད་ཆེས་ཡོད།ང་ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
      suggestions: [
        {
          text: "ནི་སྣ་མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 90,
        },
        {
          text: "མང་དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "དང་འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "འབྲེལ་དང་རྒྱ་ཆེའི་མི་རིག་པ་མཉམ་ལ་འཕེལ་འདེགས་སྒྲུབ་མཁན་གྱི་ཚད་པ་དང་ཡིད་ཆེས་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 40,
        },
      ],
    },
  ]);
  const [activeSegment, setActiveSegment] = useState(null);

  const handleAccordionChange = (value) => {
    setActiveSegment((prev) => (prev === value ? null : value));
  };

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

  const splitSegment = (segmentId,index) => {
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
        translation: firstTranslation,
        suggestions: firstSuggestions,
      },
      {
        id: segments.length + 1,
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey) {
        const activeSegment = segments[segments.length - 1];

        console.log("key", e.key);
        switch (e.key) {
          case "1":
            e.preventDefault();
            if (activeSegment?.suggestions[0]) {
              updateTranslation(activeSegment.id, 0);
            }
            break;
          case "2":
            e.preventDefault();
            if (activeSegment?.suggestions[1]) {
              updateTranslation(activeSegment.id, 1);
            }
            break;
          case "3":
            e.preventDefault();
            if (activeSegment?.suggestions[2]) {
              updateTranslation(activeSegment.id, 2);
            }
            break;
          case "4":
            e.preventDefault();
            if (activeSegment?.suggestions[3]) {
              updateTranslation(activeSegment.id, 3);
            }
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [segments]);

  return (
    <div className="w-full mx-auto p-4 max-w-6xl">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-1"
        value={activeSegment}
        onValueChange={handleAccordionChange}
      >
        {segments.map((segment, index) => (
          <AccordionItem key={segment.id} value={`segment-${segment.id}`}>
            <AccordionTrigger className="hover:no-underline">
              <TranslationHeader
                englishText={segment.sourceText}
                tibetanText={segment.translation}
              />
            </AccordionTrigger>
            <AccordionContent>
              <TranslationContent
                segment={segment}
                editTranslation={editTranslation}
                handleAccordionChange={handleAccordionChange}
                splitSegment={splitSegment}
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

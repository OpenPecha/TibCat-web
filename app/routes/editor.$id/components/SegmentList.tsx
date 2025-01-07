import { useState } from "react";
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
      id: 0,
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
      id: 1,
      sourceText:
        "Technology is transforming the way we work and interact with each other.",
      translation:
        "ཐོག་དབང་གསར་རིག་གི་བསྒྲིགས་ཆས་ངེས་བསྟར་སྐབས་དང་གྲོས་བསྡུར་བྱེད་སྒོ་ལས་སྤར་དང་མཐུན་འབྲེལ་བྱེད་པའི་ལས་སྦྱོང་ཡིད་རུང་ལྡན་པ།",
      suggestions: [
        {
          text: "གཞི་བདག་ཐོག་དབང་གསར་རིག་ལས་སྦྱོང་རྣམས་སྒྲིག་བཀག་ལོག་རྒྱ་བར་དུ་དམིགས་པ་བྱས་ཏེ།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 85,
        },
        {
          text: "གསར་རིག་འདི་རང་ཚུལ་བཞིན་བསྒྲིགས་སྐབས་རིང་གི་མཚུངས་སུ་བསྟར་སྤོ་བྱེད་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 75,
        },
      ],
    },
    {
      id: 2,
      sourceText:
        "Education is the key to unlocking the potential of future generations.",
      translation: "ཡོན་ཏན་རང་བྱུང་བའི་སྐོར་བར་གོམ་རྒྱུགས་སྟོན་པའི་རྩ་བ་གྲུབ།",
      suggestions: [
        {
          text: "མཉམ་ལ་འབྲེལ་འདིར་ཡོངས་གཉིས་ཡིན་ཏེ།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 80,
        },
        {
          text: "མངོན་སུམ་ཐོབ་རིགས་ཀྱི་ལས་གཞི་ཡིན་པ་འདྲ་གསལ་རུ་བཤད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 78,
        },
      ],
    },
    {
      id: 3,
      sourceText:
        "Global warming is a pressing issue that requires immediate attention.",
      translation:
        "རྒྱ་གར་འཁྲུག་བསྒྲུབས་གཉིས་ཀ་དང་དུས་གཞིའི་གནས་ལ་འབད་མཁན་ཡོད།",
      suggestions: [
        {
          text: "དགའ་རྒྱལ་ཡུལ་དུ་བསྒྲུབས་དང་འབད་བར་རྒྱུག་རྒྱུ་ཡོད།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 88,
        },
        {
          text: "རིང་བསྟར་ལས་འཕེལ་དགོས་ཡིན།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 76,
        },
      ],
    },
    {
      id: 4,
      sourceText:
        "Artificial Intelligence is shaping the future of many industries.",
      translation: "རང་རིག་སྒྲིག་བསྒྲིགས་དང་ལས་གཞི་རྣམས་གཞི་རྒྱག་སུ་སྒྲུབ་ཡོད།",
      suggestions: [
        {
          text: "གནས་ཚུལ་བསྟན་དུ་བསྒྲུབས་རེ་འཚོགས་ཡོད།",
          source: "Mirta MT",
          language: "Tibetan (BODH)",
          confidence: 90,
        },
        {
          text: "འཕྲོ་རྒྱུ་མེད་སྒྲིགས་དུ་འབད་ཡོད།",
          source: "NLLB MT",
          language: "Tibetan (BODH)",
          confidence: 84,
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
                updateTranslation={updateTranslation}
                segments={segments}
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

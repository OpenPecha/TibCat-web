import { LoaderFunction } from "@remix-run/node";
import SegmentList from "./components/SegmentList";

export const loader: LoaderFunction = async ({ request, params }) => {
 const translationData = [
     {
       id: 0,
       isTranslated: false,
       order:0,
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
       isTranslated: false,
       order:1,
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
       isTranslated: false,
       order:2,
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
       isTranslated: false,
       order:3,
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
       isTranslated: false,
       order:4,
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
   ];

    const docxId = params.id;
    const progress={
      fileName : "MonlamMelong.docx",
      jobId : "12314443424",
      sourceLanguage : "English",
      targetLanguage : "Tibetan",
      segments:translationData
    }
    return { translationData ,progress};
};
export default function route() {
    return   <SegmentList />
    
}

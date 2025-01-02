
import Dashboard from "./components/Dashboard";
import { LoaderFunction } from "@remix-run/node";

const allProjects = [
  { id: 1, name: "Translation Guide.docx", progress: 100 },
  { id: 2, name: "Tibetan Grammar.pdf", progress: 45 },
  { id: 3, name: "Buddhist Texts.docx", progress: 55 },
  { id: 4, name: "Manuscript_Analysis.pdf", progress: 65 },
  { id: 5, name: "Cultural_Research.docx", progress: 25 },
  { id: 6, name: "Historical_Documents.docx", progress: 90 },
  { id: 7, name: "Ancient_Scripts.pdf", progress: 30 },
  { id: 8, name: "Monlam_TTS_Overview.docx", progress: 75 },
  { id: 9, name: "Language_Model_Notes.docx", progress: 85 },
  { id: 10, name: "OCR_Training_Data.docx", progress: 50 },
  { id: 11, name: "Speech_Recognition_Guide.pdf", progress: 40 },
  { id: 12, name: "Tibetan_Fonts_Analysis.docx", progress: 65 },
  { id: 13, name: "Pecha_Alignment_Report.pdf", progress: 95 },
  { id: 14, name: "Bilingual_Glossary.docx", progress: 20 },
  { id: 15, name: "AI_Linguistics_Study.docx", progress: 70 },
  { id: 16, name: "Phonetics_Research.pdf", progress: 80 },
  { id: 17, name: "Syntax_Study_2023.docx", progress: 35 },
  { id: 18, name: "Machine_Translation_Results.pdf", progress: 60 },
  { id: 19, name: "Semantic_Model_Notes.docx", progress: 55 },
  { id: 20, name: "Training_Log_2024.pdf", progress: 45 },
];


export const loader:LoaderFunction = async () => {
  return allProjects;
};

export default function route() {
  return (
      <div>
          <Dashboard />
    </div>
  )
}

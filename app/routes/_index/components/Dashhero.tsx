import { Search, Plus } from "lucide-react";

const projects = [
  { id: 1, name: "MonlamMelong.docx", progress: 100 },
  { id: 2, name: "MonlamMelong.docx", progress: 45 },
  { id: 3, name: "MonlamMelong.docx", progress: 55 },
  { id: 4, name: "MonlamMelong.docx", progress: 65 },
  { id: 5, name: "MonlamMelong.docx", progress: 25 },
];

export default function Dashhero() {
    return (
      <div className="h-screen">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            Track your Projects
          </h1>
          <p className="text-center text-gray-600">
            visualize your progress and collaborate with Translators around the
            world
          </p>
        </div>
        <div className="bg-neutral-300 pt-6 px-20 mx-10 rounded-3xl">
          <img src="/assets/Dashboard.jpg" alt="hero" className="w-full" />
        </div>
      </div>
    );
};
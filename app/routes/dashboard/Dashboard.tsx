import { Search, Plus } from "lucide-react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const projects = [
  { id: 1, name: "MonlamMelong.docx", progress: 100 },
  { id: 2, name: "MonlamMelong.docx", progress: 45 },
  { id: 3, name: "MonlamMelong.docx", progress: 55 },
  { id: 4, name: "MonlamMelong.docx", progress: 65 },
  { id: 5, name: "MonlamMelong.docx", progress: 25 },
];

export default function Dashboard() {
  const [isSelecting, setisSelecting] = useState(false)
    return (
      <div className="flex items-center justify-center">
        <div className="w-full p-10 space-y-6">
          <div className="text-xl font-semibold">Projects</div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center justify-start space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Projects"
                  className="pl-10 py-2 border rounded-lg bg-transparent ring-0 outline-none text-sm font-medium"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>
              <select className="border rounded-lg px-4 py-2 bg-transparent ring-0 outline-none text-sm font-medium">
                <option>Sort by: Date</option>
              </select>
            </div>
            <div className="flex items-center justify-center space-x-2">
              {!isSelecting ? <button className="bg-surface-light text-black px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-inner" onClick={() => setisSelecting(true)}>
                Select
              </button> : (
                  <div className="flex items-center gap-2">
                    <button className="bg-surface-light text-black px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-inner" onClick={() => setisSelecting(false)}>
                      Cancel
                    </button>
                    <button className="bg-surface-light text-black px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium shadow-inner">
                      Delete
                      <MdDelete size={20} />
                    </button>
                    </div>)}
              <button className="bg-success-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 text-xs font-medium">
                Import
                <Plus size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="grid grid-cols-4 items-center gap-2 relative"
              >
                {isSelecting && <div className="absolute -left-6 top-1">
                  <input type="checkbox" className="h-4 w-4 bg-white border"/>
                </div>}
                <div className="col-span-1 space-x-1">
                  <span className="w-6 text-xs font-medium">{project.id}.</span>
                  <span className="w-48 text-xs font-medium">
                    {project.name}
                  </span>
                </div>

                <div className="col-span-2 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-success-500 h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="cols-span-1 flex items-center justify-between space-x-2">
                  {project.progress === 100 ? (
                    <span className="w-1/2 px-4 py-1 bg-success-500 text-white rounded-lg text-xs font-medium text-center">
                      Completed
                    </span>
                  ) : (
                    <span className="w-1/2 px-4 py-1 bg-neutral-600 rounded-lg text-xs font-medium text-white text-center">
                      {project.progress}%
                    </span>
                  )}
                  <button
                    className={`w-1/2  px-4 py-1 rounded-lg text-xs bg-success-700 text-white font-medium ${
                      project.progress !== 100 && "opacity-50 text-neutral-400"
                    }`}
                  >
                    Export
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
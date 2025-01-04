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
          <div className="mx-auto bg-white rounded-t-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2">
                <img src="/assets/logo.png" alt="logo" className="h-8 w-8" />
                <div className="">
                  <p className="font-bold text-lg leading-4">Tibcat</p>
                  <p className="text-xs">by MonlamAi</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium">DashBoard</span>
                <img
                  src="/assets/profile.png"
                  alt="logo"
                  className="h-10 w-10"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-xl font-semibold">Projects</div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center justify-start space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Projects"
                      className="pl-10 py-1 border rounded-lg bg-transparent ring-0 outline-none text-sm font-medium"
                    />
                    <Search className="absolute left-3 top-2 text-gray-400 w-4 h-4" />
                  </div>
                  <select className="border rounded-lg px-4 py-1 bg-transparent ring-0 outline-none text-sm font-medium">
                    <option>Sort by: Date</option>
                  </select>
                </div>
                <button className="bg-success-500 text-white px-4 py-1 rounded-lg flex items-center gap-2 text-xs font-medium">
                  Import
                  <Plus size={20} />
                </button>
              </div>

              <div className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="grid grid-cols-4 items-center gap-2"
                  >
                    <div className="col-span-1 space-x-2">
                      <span className=" text-xs font-medium">
                        {project.id}.
                      </span>
                      <span className=" text-xs font-medium">
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
                          project.progress !== 100 &&
                          "opacity-50 text-neutral-400"
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
        </div>
      </div>
    );
};
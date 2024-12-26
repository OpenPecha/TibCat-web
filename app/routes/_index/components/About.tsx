
export default function About() {

  return (
    <div className="w-full h-screen md:min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 h-full space-x-32">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-success-500">
              Streamline Your Workflow,
            </h1>
            <h2 className="text-2xl font-semibold text-green-700 mt-2">
              Elevate Your Craft
            </h2>

            <div className="mt-12 space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Build for Collaboration</h3>
                <p className="font-medium text-sm">
                  Enables effortless collaboration between you and your team,
                  making it like having a shared workspace where you can easily
                  collaborate in real time.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Machine Translation Support
                </h3>
                <p className="font-medium text-sm">
                  Uses advanced API for Machine Translation Support. Gives real
                  time suggestion in the workspace.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img src="./assets/kha.png" alt="about" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

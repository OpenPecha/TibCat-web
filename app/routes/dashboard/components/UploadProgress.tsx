import { Progress } from "~/components/ui/progress";

export function UploadProgress({ progress }) {
  return (
    <div className="p-8 space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-medium text-primary-800 mb-2">
          Analyzing...
        </h3>
        <Progress value={progress} className="h-4" />
        <p className="text-sm text-neutral-600 mt-2">{progress}% complete</p>
      </div>
    </div>
  );
}

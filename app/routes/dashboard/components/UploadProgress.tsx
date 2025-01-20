export function UploadProgress() {
  return (
    <div className="p-8 space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-medium text-primary-800 mb-2">
          Analyzing...
        </h3>
        <div className="relative h-4 bg-neutral-200 rounded-full overflow-hidden">
          <div className="absolute inset-0 w-1/2 bg-green-500 h-full rounded-full animate-loading" />
        </div>
      </div>
    </div>
  );
}

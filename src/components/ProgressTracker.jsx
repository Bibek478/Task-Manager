import { Progress } from "@/components/ui/progress";

export default function ProgressTracker({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "Completed").length; 
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100); 

  return (
    <div className="mb-8 p-4 border rounded-lg bg-card text-card-foreground shadow-sm">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Task Progress</span>
        <span className="text-sm text-muted-foreground">
          {completed} of {total} completed
        </span>
      </div>
      <Progress
        value={progress}
        className="h-2 w-full bg-secondary [&>div]:bg-blue-500"
      />
    </div>
  );
}
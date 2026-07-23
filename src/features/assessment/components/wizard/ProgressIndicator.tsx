import { Progress } from "@/src/components/ui/progress";

interface ProgressIndicatorProps {
  current: number;
  total: number;
}

export function ProgressIndicator({
  current,
  total,
}: ProgressIndicatorProps) {
  const progress = (current / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>
          Question {current} of {total}
        </span>

        <span>{Math.round(progress)}%</span>
      </div>

      <Progress value={progress} />
    </div>
  );
}
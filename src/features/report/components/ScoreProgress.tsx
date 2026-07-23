import { Progress } from "@/src/components/ui/progress";

interface Props {
  label: string;
  value: number;
}

export function ScoreProgress({
  label,
  value,
}: Props) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>

        <span className="font-semibold">
          {value}%
        </span>
      </div>

      <Progress value={value} />
    </div>
  );
}
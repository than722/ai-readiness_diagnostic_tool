import { Card } from "@/src/components/ui/card";

import { ScoreProgress } from "../components/ScoreProgress";

interface Props {
  title: string;

  score: number;
}

export function PillarScoreCard({
  title,
  score,
}: Props) {
  return (
    <Card className="p-6">

      <ScoreProgress
        label={title}
        value={score}
      />

    </Card>
  );
}
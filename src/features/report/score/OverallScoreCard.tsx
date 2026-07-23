import { ArrowUpRight } from "lucide-react";

import { Card } from "@/src/components/ui/card";

interface Props {
  score: number;
  tier: string;
  nextGoal: string;
}

export function OverallScoreCard({
  score,
  tier,
  nextGoal,
}: Props) {
  return (
    <Card className="rounded-3xl border bg-gradient-to-r from-primary/5 via-background to-background p-10 shadow-lg">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex-1">

          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Overall AI Readiness
          </p>

          <h2 className="mt-3 text-6xl font-extrabold text-primary">
            {score}%
          </h2>

          <div className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            {tier}
          </div>

          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <ArrowUpRight className="h-5 w-5" />
              Next Goal
            </div>

            <p className="mt-3 leading-7 text-muted-foreground">
              {nextGoal}
            </p>
          </div>

        </div>

        <div className="w-full max-w-sm">

          <div className="mb-3 flex justify-between text-sm">
            <span>Progress</span>

            <span>{score}%</span>
          </div>

          <div className="h-4 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-700"
              style={{
                width: `${score}%`,
              }}
            />
          </div>

        </div>

      </div>
    </Card>
  );
}
import {
  Globe,
  MousePointerClick,
  ShoppingCart,
  HeartHandshake,
} from "lucide-react";

import { RaceStage } from "@/src/features/assessment/types";

import { Card } from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";

interface Props {
  scores: Record<RaceStage, number>;
}

const stageConfig = {
  Reach: {
    icon: Globe,
    color: "text-sky-500",
    description:
      "Brand awareness and audience acquisition",
  },

  Act: {
    icon: MousePointerClick,
    color: "text-indigo-500",
    description:
      "Website engagement and lead generation",
  },

  Convert: {
    icon: ShoppingCart,
    color: "text-emerald-500",
    description:
      "Sales and customer conversion",
  },

  Engage: {
    icon: HeartHandshake,
    color: "text-pink-500",
    description:
      "Retention and customer loyalty",
  },
};

function getStatus(score: number) {
  if (score >= 80)
    return "Excellent";

  if (score >= 60)
    return "Good";

  return "Needs Improvement";
}

export function RaceGrid({
  scores,
}: Props) {
  return (
    <section className="space-y-8">

      <div className="grid gap-6 md:grid-cols-2">

        {Object.entries(scores).map(([stage, score]) => {
          const config =
            stageConfig[stage as keyof typeof stageConfig];

          const Icon = config.icon;

          return (
            <Card
              key={stage}
              className="rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex justify-between">

                <div className="flex gap-4">

                  <div className="rounded-xl bg-muted p-3">
                    <Icon
                      className={`h-6 w-6 ${config.color}`}
                    />
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {stage}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {config.description}
                    </p>

                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-primary">
                      {getStatus(score)}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <div className="text-3xl font-bold text-primary">
                    {score}%
                  </div>

                </div>

              </div>

              <Progress
                value={score}
                className="mt-6 h-2"
              />

            </Card>
          );
        })}

      </div>

    </section>
  );
}
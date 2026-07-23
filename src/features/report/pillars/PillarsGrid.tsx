import {
  Brain,
  Database,
  Users,
  Target,
  Cog,
} from "lucide-react";

import { Pillar } from "@/src/features/assessment/types";

import { Card } from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";

interface Props {
  scores: Record<Pillar, number>;
}

const pillarConfig = {
  "AI Adoption": {
    icon: Brain,
    color: "text-violet-500",
  },
  "Data & Systems": {
    icon: Database,
    color: "text-blue-500",
  },
  "Team Readiness": {
    icon: Users,
    color: "text-emerald-500",
  },
  "Business Clarity": {
    icon: Target,
    color: "text-orange-500",
  },
  "Process Maturity": {
    icon: Cog,
    color: "text-pink-500",
  },
};

function getStatus(score: number) {
  if (score >= 80)
    return {
      label: "Excellent",
      color: "bg-green-100 text-green-700",
    };

  if (score >= 60)
    return {
      label: "Good",
      color: "bg-blue-100 text-blue-700",
    };

  return {
    label: "Needs Work",
    color: "bg-orange-100 text-orange-700",
  };
}

export function PillarsGrid({
  scores,
}: Props) {
  return (
    <section className="space-y-8">

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {Object.entries(scores).map(([pillar, score]) => {
          const config =
            pillarConfig[pillar as keyof typeof pillarConfig];

          const Icon = config.icon;

          const status = getStatus(score);

          return (
            <Card
              key={pillar}
              className="rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className="rounded-xl bg-muted p-3">
                    <Icon
                      className={`h-6 w-6 ${config.color}`}
                    />
                  </div>

                  <div>

                    <p className="font-semibold">
                      {pillar}
                    </p>

                    <span
                      className={`mt-1 inline-flex rounded-full px-2 py-1 text-xs font-medium ${status.color}`}
                    >
                      {status.label}
                    </span>

                  </div>

                </div>

                <span className="text-3xl font-bold text-primary">
                  {score}%
                </span>

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
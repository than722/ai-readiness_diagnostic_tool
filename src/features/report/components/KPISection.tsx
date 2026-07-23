import {
  Building2,
  Users,
  Trophy,
  Gauge,
} from "lucide-react";

import { Card } from "@/src/components/ui/card";

interface Props {
  score: number;
  tier: string;
  industry: string;
  teamSize: string;
}

export function KPISection({
  score,
  tier,
  industry,
  teamSize,
}: Props) {
  const cards = [
    {
      title: "Overall Score",
      value: `${score}%`,
      icon: Gauge,
    },
    {
      title: "AI Tier",
      value: tier,
      icon: Trophy,
    },
    {
      title: "Industry",
      value: industry,
      icon: Building2,
    },
    {
      title: "Team Size",
      value: teamSize,
      icon: Users,
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="rounded-3xl border bg-gradient-to-br from-card to-muted/40 p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {card.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  {card.value}
                </h3>
              </div>

              <div className="rounded-2xl bg-primary/10 p-4">
                <Icon className="h-7 w-7 text-primary" />
              </div>
            </div>
          </Card>
        );
      })}
    </section>
  );
}
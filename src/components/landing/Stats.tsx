import {
  Brain,
  Clock3,
  FileText,
  TrendingUp,
} from "lucide-react";

import { Container } from "@/src/components/layout/Container";
import { Card } from "@/src/components/ui/card";

const stats = [
  {
    icon: Brain,
    value: "4",
    label: "Assessment Pillars",
    description:
      "Business, Data, Technology & Team",
  },
  {
    icon: Clock3,
    value: "3 min",
    label: "Average Completion",
    description:
      "Quick and easy assessment",
  },
  {
    icon: FileText,
    value: "AI",
    label: "Personalized Report",
    description:
      "Executive summary & roadmap",
  },
  {
    icon: TrendingUp,
    value: "90 Days",
    label: "Implementation Roadmap",
    description:
      "Actionable improvement plan",
  },
];

export function Stats() {
  return (
    <section className="py-24">
      <Container>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card
                key={stat.label}
                className="
                  rounded-2xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:-translate-y-2
hover:shadow-2xl
duration-300
                "
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-4xl font-bold">
                  {stat.value}
                </h3>

                <p className="mt-2 font-semibold">
                  {stat.label}
                </p>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}
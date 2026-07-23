import {
  Brain,
  Bot,
  ChartColumnIncreasing,
} from "lucide-react";

import { Container } from "@/src/components/layout/Container";
import { Card } from "@/src/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "AI Readiness Assessment",
    description:
      "Assess your organization across Business Strategy, Data, Technology, and Team readiness.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Executive AI Report",
    description:
      "Receive a personalized executive summary, AI recommendations, quick wins, and a 90-day roadmap.",
  },
  {
    icon: Bot,
    title: "AI Consultant",
    description:
      "Chat with an AI consultant to explore your results and receive tailored implementation advice.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-muted/30 py-28"
    >
      <Container>

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
             FEATURES
          </div>

          <h2 className="mt-4 text-4xl font-bold">
            Everything You Need To Start Your AI Journey
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            From assessment to implementation,
            receive practical guidance backed by AI.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="
                  rounded-2xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:-translate-y-2
                  hover:shadow-2xl
                  duration-300
                                "
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}
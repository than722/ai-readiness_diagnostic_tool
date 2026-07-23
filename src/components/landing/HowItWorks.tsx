import {
  ClipboardCheck,
  Sparkles,
  FileText,
} from "lucide-react";

import { Container } from "@/src/components/layout/Container";
import { Card } from "@/src/components/ui/card";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Complete the Assessment",
    description:
      "Answer a short set of questions covering your strategy, technology, data, and team readiness. It only takes about 3 minutes.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Analyzes Your Business",
    description:
      "Our AI evaluates your responses, calculates your readiness score, and identifies opportunities tailored to your organization.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Receive Your Executive Report",
    description:
      "Get a personalized AI readiness report with recommendations, quick wins, workflow simulations, and a 90-day roadmap.",
  },
];

export function HowItWorks() {
  return (
    <section 
        id="how-it-works"
        className="py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            HOW IT WORKS
          </div>

          <h2 className="mt-4 text-4xl font-bold">
            Three Simple Steps
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Discover your AI readiness and receive a
            practical roadmap in just a few minutes.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.number}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:-translate-y-2
hover:shadow-2xl
duration-300
                "
              >
                <div className="absolute right-6 top-6 text-6xl font-bold text-primary/10">
                  {step.number}
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </Card>
            );
          })}

        </div>

      </Container>
    </section>
  );
}
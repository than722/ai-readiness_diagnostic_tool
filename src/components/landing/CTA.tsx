import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/layout/Container";

export function CTA() {
  return (
    <section className="py-32">
      <Container>

        <div className="rounded-[32px] bg-primary px-10 py-20 text-center text-primary-foreground shadow-2xl">

          <h2 className="text-5xl font-bold">
            Ready to Discover Your
            AI Potential?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
            Complete the assessment today and
            receive your personalized AI readiness
            report in minutes.
          </p>

          <div className="mt-10">

            <Link href="/assessment">
              <Button
                variant="secondary"
                size="lg"
                className="
                    rounded-xl
                    px-8
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-xl
                "
                >
                Start Free Assessment

                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

          </div>

        </div>

      </Container>
    </section>
  );
}
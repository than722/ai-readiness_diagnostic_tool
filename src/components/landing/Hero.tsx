import Link from "next/link";

import {
  ArrowRight,
  Sparkles,
  BarChart3,
  Brain,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Container } from "@/src/components/layout/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
      </div>

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />

              AI Readiness Assessment Platform
            </div>

            <h1 className="mt-8 text-5xl font-extrabold tracking-tight lg:text-7xl">
              Discover your{" "}
              <span className="bg-gradient-to-r from-primary via-violet-500 to-blue-500 bg-clip-text text-transparent">
                AI Readiness
              </span>{" "}
              in just 3 minutes.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
              Evaluate your business across Strategy,
              Data, Technology and Team. Receive an
              AI-generated executive report, practical
              recommendations, and a 90-day roadmap.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link href="/assessment">
                <Button
                    size="lg"
                    className="
                    transition-all
                    hover:scale-105
                    hover:shadow-xl
                    "
                >
                    Start Free Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                </Link>

              <Link href="#features">
                <Button
                    variant="outline"
                    size="lg"
                    className="
                    transition-all
                    hover:scale-105
                    hover:shadow-xl
                    "
                >
                    Learn More
                </Button>
                </Link>
            </div>

            <div className="mt-8 flex items-center gap-8 text-sm text-muted-foreground">

              <div>
                ⭐ AI-Powered Report
              </div>

              <div>
                ⚡ 3-Minute Assessment
              </div>

              <div>
                🔒 Secure Results
              </div>

            </div>

          </div>

          {/* Right */}

          <Card className="rounded-3xl border bg-background/80 p-8 shadow-2xl backdrop-blur">
            <div className="mb-8 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-muted-foreground">
                  Overall AI Readiness
                </p>

                <h2 className="mt-2 text-6xl font-bold text-primary">
                  72%
                </h2>

                <p className="mt-2 font-medium">
                  Automated
                </p>

              </div>

              <Brain className="h-16 w-16 text-primary" />

            </div>

            <div className="mt-8 space-y-4">

              {[
                ["Business", 80],
                ["Data", 60],
                ["Technology", 75],
                ["Team", 73],
              ].map(([label, value]) => (
                <div key={label}>

                  <div className="mb-2 flex justify-between text-sm">

                    <span>{label}</span>

                    <span>{value}%</span>

                  </div>

                  <div className="h-2 rounded-full bg-muted">

                    <div
                      className="h-2 rounded-full bg-primary transition-all"
                      style={{
                        width: `${value}%`,
                      }}
                    />

                  </div>

                </div>
              ))}

            </div>

            <div className="mt-8 rounded-xl bg-muted/50 p-4">

              <div className="flex items-center gap-3">

                <BarChart3 className="h-5 w-5 text-primary" />

                <p className="font-medium">
                  Personalized AI Executive Report
                </p>

              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Get actionable recommendations, quick
                wins, and an AI-generated roadmap
                tailored to your business.
              </p>

            </div>

          </Card>

        </div>
      </Container>
    </section>
  );
}
import { BadgeCheck, Building2, Users } from "lucide-react";

import { Card } from "@/src/components/ui/card";

interface Props {
  company: string;
  industry: string;
  teamSize: string;
  tier: string;
}

export function ReportHero({
  company,
  industry,
  teamSize,
  tier,
}: Props) {
  return (
    <Card className="overflow-hidden rounded-3xl border bg-gradient-to-r from-primary/10 via-background to-background p-10 shadow-lg">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            AI Readiness Report
          </p>

          <h1 className="mt-4 text-5xl font-extrabold">
            {company}
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              {industry}
            </div>

            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              {teamSize}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-primary px-8 py-5 text-primary-foreground shadow-xl">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5" />

            <span className="font-semibold">
              {tier}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
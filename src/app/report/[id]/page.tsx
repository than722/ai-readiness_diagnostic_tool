import { notFound } from "next/navigation";

import { ReportService } from "@/src/features/report/services/report.service";

import { ReportHero } from "@/src/features/report/hero/ReportHero";
import { OverallScoreCard } from "@/src/features/report/score/OverallScoreCard";
import { PillarsGrid } from "@/src/features/report/pillars/PillarsGrid";
import { RaceGrid } from "@/src/features/report/race/RaceGrid";
import { ExecutiveSummary } from "@/src/features/report/summary/ExecutiveSummary";

import { RadarChartCard } from "@/src/features/report/charts/RadarChartCard";
import { BarChartCard } from "@/src/features/report/charts/BarChartCard";

import { QuickWins } from "@/src/features/report/components/QuickWins";
import { Recommendations } from "@/src/features/report/components/Recommendations";
import { Roadmap } from "@/src/features/report/components/Roadmap";

import { AIConsultant } from "@/src/features/report/chat/AIConsultant";

import { KPISection } from "@/src/features/report/components/KPISection";
import { SectionHeader } from "@/src/components/layout/SectionHeader"

import { Navbar } from "@/src/components/layout/Navbar";

interface ReportPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReportPage({
  params,
}: ReportPageProps) {
  const { id } = await params;

  const service = new ReportService();

  const data = await service.getReport(id);

    if (!data) {
      notFound();
    }

    const { report, ai } = data;

  if (!report) {
    notFound();
  }

  return (
    <>
      <Navbar variant="report" />
  <main className="mx-auto max-w-7xl space-y-20 bg-gradient-to-b from-background via-muted/20 to-background px-6 py-16">

    {/* Hero */}
    <ReportHero
    company={report.companyName}
    industry={report.industry}
    teamSize={report.teamSize}
    tier={report.tier}
    />

    {/* Overall Score */}
    <section className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold">
          Overall Assessment
        </h2>

        <p className="text-muted-foreground">
          Your overall AI readiness based on strategy,
          data, technology and people.
        </p>
      </div>

      <KPISection
      score={report.totalScore}
      tier={report.tier}
      industry={report.industry}
      teamSize={report.teamSize}
      />

      <OverallScoreCard
      score={report.totalScore}
      tier={report.tier}
      nextGoal={ai?.nextGoal ?? ""}
      />
    </section>

    {/* Executive Summary */}
    {ai && (
      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold">
            🧠 Executive Summary
          </h2>

          <p className="text-muted-foreground">
            AI-generated overview of your organization&apos;s
            current maturity.
          </p>
        </div>

        <ExecutiveSummary
          summary={ai.executiveSummary}
        />
      </section>
    )}

    {/* Analytics */}
    <section className="space-y-10">

    <SectionHeader
    title="📊 Assessment Analytics"
    description="Explore your readiness across strategy, technology, people, and marketing."
    />

    <div className="grid gap-8 lg:grid-cols-2">

    <RadarChartCard
    scores={report.pillarScores}
    />

    <BarChartCard
    scores={report.pillarScores}
    />

    </div>


    </section>
    {/* Pillars */}
    <section className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold">
          🏢 AI Readiness Pillars
        </h2>

        <p className="text-muted-foreground">
          Performance across your core business
          capabilities.
        </p>
      </div>

      <PillarsGrid
        scores={report.pillarScores}
      />

    </section>

    {/* RACE */}
    <section className="space-y-6">

      <div>
        <h2 className="text-3xl font-bold">
          🚀 RACE Framework
        </h2>

        <p className="text-muted-foreground">
          Marketing maturity across Reach, Act,
          Convert and Engage.
        </p>
      </div>

      <RaceGrid
        scores={report.raceScores}
      />

    </section>

    {/* AI Recommendations */}
    {ai && (
      <section className="space-y-8">

        <div>
          <h2 className="text-3xl font-bold">
            ⚡ AI Recommendations
          </h2>

          <p className="text-muted-foreground">
            Practical improvements generated for your
            organization.
          </p>
        </div>

        <QuickWins
          wins={ai.quickWins}
        />

        <Recommendations
          recommendations={ai.recommendations}
        />

      </section>
    )}

    {/* Roadmap */}
    {ai && (
      <section className="space-y-6">

        <div>
          <h2 className="text-3xl font-bold">
            📅 90-Day AI Roadmap
          </h2>

          <p className="text-muted-foreground">
            Suggested implementation timeline.
          </p>
        </div>

        <Roadmap
          roadmap={ai.workflowSimulation}
        />

      </section>
    )}

    {/* Consultant */}
    {ai && (
      <section className="space-y-6">

        <div>
          <h2 className="text-3xl font-bold">
            🤖 AI Consultant
          </h2>

          <p className="text-muted-foreground">
            Ask follow-up questions about your report.
          </p>
        </div>

        <div className="no-print">
        <AIConsultant
          company={report.companyName}
          industry={report.industry}
          teamSize={report.teamSize}
          totalScore={report.totalScore}
          tier={report.tier}
          executiveSummary={
            ai.executiveSummary
          }
        />
        </div>
      </section>
    )}
  </main>
  </>
);
}
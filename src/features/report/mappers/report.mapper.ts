import {
  AssessmentRow,
  ReportRow,
  ReportViewModel,
} from "../types/report";

import {
  Pillar,
  RaceStage,
  MaturityTier,
} from "@/src/features/assessment/types";

export function mapReportToViewModel(
  report: ReportRow,
  assessment: AssessmentRow
): ReportViewModel {
  return {
    id: report.id,

    assessmentId: report.assessment_id,

    companyName: assessment.company_name,

    fullName: assessment.full_name,

    email: assessment.email,

    industry: assessment.industry,

    teamSize: assessment.team_size,

    totalScore: report.total_score,

    tier: report.tier as MaturityTier,

    pillarScores:
      report.pillar_scores as Record<Pillar, number>,

    raceScores:
      report.race_scores as Record<RaceStage, number>,
  };
}
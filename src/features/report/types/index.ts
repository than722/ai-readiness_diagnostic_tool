import { Pillar, RaceStage } from "@/src/features/assessment/types";

export interface ReportResult {
  totalScore: number;

  tier:
    | "Manual"
    | "Digitized"
    | "Automated"
    | "AI-Augmented";

  pillarScores: Record<Pillar, number>;

  raceScores: Record<RaceStage, number>;
}
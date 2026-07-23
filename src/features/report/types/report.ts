import { Database } from "@/src/lib/supabase/database.types";

import {
  Pillar,
  RaceStage,
  MaturityTier,
} from "@/src/features/assessment/types";

export type ReportRow =
  Database["public"]["Tables"]["reports"]["Row"];

export type AssessmentRow =
  Database["public"]["Tables"]["assessments"]["Row"];

export interface ReportViewModel {
  id: string;

  assessmentId: string;

  companyName: string;

  fullName: string;

  email: string;

  industry: string;

  teamSize: string;

  totalScore: number;

  tier: MaturityTier;

  pillarScores: Record<Pillar, number>;

  raceScores: Record<RaceStage, number>;
}
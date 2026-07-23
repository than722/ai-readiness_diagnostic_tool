export type Pillar =
  | "Business Clarity"
  | "Process Maturity"
  | "Data & Systems"
  | "AI Adoption"
  | "Team Readiness";

export type RaceStage =
  | "Reach"
  | "Act"
  | "Convert"
  | "Engage";

export interface QuestionOption {
  id: string;
  label: string;

  maturity: 0 | 1 | 2 | 3;
}

export interface AssessmentQuestion {
    order: number;

    id: string;

    section: string;

    title: string;

    description: string;

    primaryPillar: Pillar;

    secondaryPillar: Pillar;

    race: RaceStage;

    weight?: number;

    options: QuestionOption[];
}

export type MaturityTier =
  | "Manual"
  | "Digitized"
  | "Automated"
  | "AI-Augmented";
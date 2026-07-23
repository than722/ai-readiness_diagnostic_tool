import { assessmentQuestions } from "../data/questions";
import { Pillar, RaceStage } from "../types";

export interface DiagnosticResult {
  totalScore: number;

  tier:
    | "Manual"
    | "Digitized"
    | "Automated"
    | "AI-Augmented";

  pillarScores: Record<Pillar, number>;

  raceScores: Record<RaceStage, number>;
}

const pillarTotals: Record<Pillar, number> = {
  "Business Clarity": 0,
  "Process Maturity": 0,
  "Data & Systems": 0,
  "AI Adoption": 0,
  "Team Readiness": 0,
};

const raceTotals: Record<RaceStage, number> = {
  Reach: 0,
  Act: 0,
  Convert: 0,
  Engage: 0,
};
const pillarMaximums: Record<Pillar, number> = {
  "Business Clarity": 0,
  "Process Maturity": 0,
  "Data & Systems": 0,
  "AI Adoption": 0,
  "Team Readiness": 0,
};

const raceMaximums: Record<RaceStage, number> = {
  Reach: 0,
  Act: 0,
  Convert: 0,
  Engage: 0,
};

export function calculateDiagnosticScore(
  answers: Record<string, string>
): DiagnosticResult {
    let earnedPoints = 0;

const pillars = { ...pillarTotals };

const races = { ...raceTotals };

const pillarMax = { ...pillarMaximums };

const raceMax = { ...raceMaximums };
for (const question of assessmentQuestions) {
  const selectedId = answers[question.id];

  const option = question.options.find(
    (o) => o.id === selectedId
  );

  const max = 3 * (question.weight ?? 1);

  pillarMax[question.primaryPillar] += max;
  pillarMax[question.secondaryPillar] += max;

  raceMax[question.race] += max;

  if (!option) continue;

  const score = option.maturity * (question.weight ?? 1);

  earnedPoints += score;

  pillars[question.primaryPillar] += score;
  pillars[question.secondaryPillar] += score;

  races[question.race] += score;
}
const maximumPoints =
  assessmentQuestions.reduce(
    (sum, question) => sum + 3 * (question.weight ?? 1),
    0
  );

const totalScore = Math.round(
  (earnedPoints / maximumPoints) * 100
);
let tier: DiagnosticResult["tier"] = "Manual";

if (totalScore >= 75) {
  tier = "AI-Augmented";
} else if (totalScore >= 50) {
  tier = "Automated";
} else if (totalScore >= 25) {
  tier = "Digitized";
}
const pillarScores = Object.fromEntries(
  Object.entries(pillars).map(([key, value]) => [
    key,
    pillarMax[key as Pillar] === 0
      ? 0
      : Math.round(
          (value / pillarMax[key as Pillar]) * 100
        ),
  ])
) as Record<Pillar, number>;
const raceScores = Object.fromEntries(
  Object.entries(races).map(([key, value]) => [
    key,
    raceMax[key as RaceStage] === 0
      ? 0
      : Math.round(
          (value / raceMax[key as RaceStage]) * 100
        ),
  ])
) as Record<RaceStage, number>;
return {
  totalScore,
  tier,
  pillarScores,
  raceScores,
};
}
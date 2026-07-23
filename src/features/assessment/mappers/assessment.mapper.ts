import { assessmentQuestions } from "../data/questions";

export function mapAnswersToScores(
  answers: Record<string, string>
): Record<string, number> {
  const scores: Record<string, number> = {};

  for (const question of assessmentQuestions) {
    const option = question.options.find(
      (o) => o.id === answers[question.id]
    );

    scores[question.id] = option?.maturity ?? 0;
  }

  return scores;
}
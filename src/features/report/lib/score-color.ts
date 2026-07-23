export function getScoreColor(score: number) {
  if (score >= 75) {
    return "text-green-600";
  }

  if (score >= 50) {
    return "text-blue-600";
  }

  if (score >= 25) {
    return "text-yellow-600";
  }

  return "text-red-600";
}
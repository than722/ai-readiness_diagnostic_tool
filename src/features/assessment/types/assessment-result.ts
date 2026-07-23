import { DiagnosticResult } from "../lib/scoring";

export interface AssessmentLead {
  fullName: string;
  email: string;
  companyName: string;
  industry: string;
  teamSize: string;
}

export interface AssessmentSubmission {
  lead: AssessmentLead;

  /**
   * Stores the selected option ID for each question.
   *
   * Example:
   * {
   *   q1: "manual",
   *   q2: "standardized",
   *   q3: "ai"
   * }
   */
  answers: Record<string, string>;
}

export interface AssessmentResponse {
  assessmentId: string;

  reportId: string;

  result: DiagnosticResult;
}
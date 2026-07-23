"use server";

import { AssessmentService } from "../services/assessment.service";
import {
  AssessmentSubmission,
  AssessmentResponse,
} from "../types/assessment-result";

export async function submitAssessment(
  submission: AssessmentSubmission
): Promise<AssessmentResponse> {
  const service = new AssessmentService();

  return await service.submit(submission);
}
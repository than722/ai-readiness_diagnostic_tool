import { assessmentQuestions } from "../data/questions";
import { calculateDiagnosticScore } from "../lib/scoring";
import { mapAnswersToScores } from "../mappers/assessment.mapper";

import { AssessmentRepository } from "../repositories/assessment.repository";

import { AIReportService } from "@/src/features/report/services/ai-report.service";

import {
  AssessmentSubmission,
  AssessmentResponse,
} from "../types/assessment-result";

export class AssessmentService {
  private repository = new AssessmentRepository();

  private aiReportService = new AIReportService();

  async submit(
    submission: AssessmentSubmission
  ): Promise<AssessmentResponse> {
    // 1. Calculate report scores
    const result = calculateDiagnosticScore(
      submission.answers
    );

    // 2. Convert option IDs -> maturity scores
    const storedAnswers = mapAnswersToScores(
        submission.answers
    );

    // 3. Save assessment
    const assessment =
      await this.repository.createAssessment({
        full_name: submission.lead.fullName,
        email: submission.lead.email,
        company_name:
          submission.lead.companyName,
        industry: submission.lead.industry,
        team_size: submission.lead.teamSize,
        answers: storedAnswers,
      });

    // 4. Save report
    const report =
      await this.repository.createReport({
        assessment_id: assessment.id,

        total_score: result.totalScore,

        tier: result.tier,

        pillar_scores: result.pillarScores,

        race_scores: result.raceScores,
      });

      const aiReport =
        await this.aiReportService.generateReport({
            company: submission.lead.companyName,

            industry: submission.lead.industry,

            teamSize: submission.lead.teamSize,

            totalScore: result.totalScore,

            tier: result.tier,

            pillarScores: result.pillarScores,

            raceScores: result.raceScores,
        });

        await this.aiReportService.saveReport(
        report.id,
        aiReport
        );

    return {
      assessmentId: assessment.id,
      reportId: report.id,
      result,
    };
  }

}
import { createServerSupabaseClient } from "@/src/lib/supabase/server";

import {
  AssessmentRow,
  ReportRow,
  ReportViewModel,
} from "../types/report";

import { mapReportToViewModel } from "../mappers/report.mapper";

type ReportWithAssessment = ReportRow & {
  assessments: AssessmentRow;
};

export class ReportRepository {
  private supabase = createServerSupabaseClient();

  async findById(
    id: string
  ): Promise<ReportViewModel | null> {
    const { data, error } = await this.supabase
      .from("reports")
      .select(
        `
        *,
        assessments (
          id,
          full_name,
          email,
          company_name,
          industry,
          team_size,
          answers,
          created_at
        )
      `
      )
      .eq("id", id)
      .single();

    if (error || !data) {
      return null;
    }

    const report = data as ReportWithAssessment;

    return mapReportToViewModel(
      report,
      report.assessments
    );
  }
}
import { Database } from "@/src/lib/supabase/database.types";
import { createServerSupabaseClient } from "@/src/lib/supabase/server";

type AssessmentInsert =
  Database["public"]["Tables"]["assessments"]["Insert"];

type ReportInsert =
  Database["public"]["Tables"]["reports"]["Insert"];

export class AssessmentRepository {
  private supabase = createServerSupabaseClient();

  async createAssessment(input: AssessmentInsert) {
  const { data, error } = await this.supabase
    .from("assessments")
    .insert(input)
    .select()
    .single();

  if (error) {
    console.error("Assessment insert failed:", error);
    throw error;
  }

  return data;
}

  async createReport(input: ReportInsert) {
  const { data, error } = await this.supabase
    .from("reports")
    .insert(input)
    .select()
    .single();

  if (error) {
    console.error("Report insert failed:", error);
    throw error;
  }

  return data;
}
}
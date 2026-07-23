import { createServerSupabaseClient } from "@/src/lib/supabase/server";
import { Database } from "@/src/lib/supabase/database.types";

type AiReportRow =
  Database["public"]["Tables"]["report_ai_outputs"]["Row"];

export interface AIReportViewModel {
  executiveSummary: string;
  nextGoal: string;
  quickWins: string[];
  recommendations: string[];
  workflowSimulation: {
    days30: string[];
    days60: string[];
    days90: string[];
  };
}

export class AIReportRepository {
  private supabase =
    createServerSupabaseClient();

  async findByReportId(
    reportId: string
  ): Promise<AIReportViewModel | null> {
    const { data, error } =
      await this.supabase
        .from("report_ai_outputs")
        .select("*")
        .eq("report_id", reportId)
        .single();

    if (error || !data) {
      return null;
    }

    return {
      executiveSummary:
        data.executive_summary ?? "",

      nextGoal:
        data.next_goal ?? "",

      quickWins:
        (data.quick_wins as string[]) ?? [],

      recommendations:
        (data.recommendations as string[]) ?? [],

      workflowSimulation:
        (data.workflow_simulation as {
          days30: string[];
          days60: string[];
          days90: string[];
        }) ?? {
          days30: [],
          days60: [],
          days90: [],
        },
    };
  }

  async create(
    input: Database["public"]["Tables"]["report_ai_outputs"]["Insert"]
  ) {
    const { data, error } =
      await this.supabase
        .from("report_ai_outputs")
        .insert(input)
        .select()
        .single();

    if (error) {
      console.error(
        "AI Report insert failed:",
        error
      );

      throw error;
    }

    return data;
  }
}
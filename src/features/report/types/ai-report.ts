export interface AIReportViewModel {
  executiveSummary: string;

  quickWins: string[];

  recommendations: string[];

  workflowSimulation: {
    days30: string[];
    days60: string[];
    days90: string[];
  };
}
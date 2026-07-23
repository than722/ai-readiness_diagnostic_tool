import { ReportRepository } from "../repositories/report.repository";
import { AIReportRepository } from "../repositories/ai-report.repository";

export class ReportService {
  private repository =
    new ReportRepository();

  private aiRepository =
    new AIReportRepository();

  async getReport(id: string) {
    const report =
      await this.repository.findById(id);

    if (!report) {
      return null;
    }

    const ai =
      await this.aiRepository.findByReportId(id);

    return {
      report,
      ai,
    };
  }
}
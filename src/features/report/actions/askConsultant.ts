"use server";

import { AIChatService } from "../services/ai-chat.service";

export async function askConsultant(
  input: {
    company: string;
    industry: string;
    teamSize: string;
    totalScore: number;
    tier: string;
    executiveSummary: string;
    question: string;
  }
) {
  const service = new AIChatService();

  return service.ask(input);
}
import { openai } from "@/src/lib/ai/openai";
import { AIReportRepository } from "../repositories/ai-report.repository";

export class AIReportService {
private repository = new AIReportRepository();

  async generateReport(input: {
    company: string;
    industry: string;
    teamSize: string;
    totalScore: number;
    tier: string;
    pillarScores: Record<string, number>;
    raceScores: Record<string, number>;
  }) {
    const prompt = `
You are a senior AI Transformation Consultant specializing in helping small and medium-sized businesses adopt AI.

Your job is to generate a professional AI readiness report.

Guidelines:
- Tailor every recommendation to the company's industry, size, and AI maturity.
- Assume the company has limited technical resources unless stated otherwise.
- Prefer practical AI tools such as ChatGPT, Microsoft Copilot, Google Workspace AI, Notion AI, Zapier, Make.com, HubSpot AI, or Power BI.
- Avoid recommending enterprise infrastructure such as Snowflake, Redshift, Kubernetes, Data Lakes, AI Centers of Excellence, or hiring large AI teams unless clearly justified.
- If the company has fewer than 50 employees, focus on affordable automation, AI assistants, and workflow improvements.
- Recommend actions that can realistically be completed within 90 days.
- Base every recommendation only on the information below.
- Do not invent facts about the company.

Company:
${input.company}

Industry:
${input.industry}

Team Size:
${input.teamSize}

Overall AI Readiness Score:
${input.totalScore}%

Current Tier:
${input.tier}

Pillar Scores:
${JSON.stringify(input.pillarScores, null, 2)}

RACE Scores:
${JSON.stringify(input.raceScores, null, 2)}

Return ONLY valid JSON in exactly this format:

{
  "executiveSummary": "",
  "nextGoal": "",
  "quickWins": [
    "",
    "",
    ""
  ],
  "recommendations": [
    "",
    "",
    ""
  ],
  "workflowSimulation": {
    "days30": [
      "",
      ""
    ],
    "days60": [
      "",
      ""
    ],
    "days90": [
      "",
      ""
    ]
  }
}
`;

const completion =
  await openai.chat.completions.create({
    model: "openrouter/free",

    response_format: {
      type: "json_object",
    },

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

    const content =
    completion.choices[0].message.content ?? "{}";


    let ai;
    try {
    ai = JSON.parse(content);
    } catch (error) {
    console.error(
        "Failed to parse AI response:",
        content
    );

    throw error;
    }

    return ai;
  }
  

  async saveReport(
  reportId: string,
  ai: {
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
) {
  return this.repository.create({
    report_id: reportId,

    executive_summary: ai.executiveSummary,

    next_goal: ai.nextGoal,

    quick_wins: ai.quickWins,

    recommendations: ai.recommendations,

    workflow_simulation: ai.workflowSimulation,
  });
}
}
import { openai } from "@/src/lib/ai/openai";

export class AIChatService {
  async ask(input: {
    company: string;
    industry: string;
    teamSize: string;
    totalScore: number;
    tier: string;
    executiveSummary: string;
    question: string;
  }) {
    const prompt = `
        You are a senior AI Transformation Consultant specializing in helping small and medium-sized businesses adopt AI.

        Your job is to provide practical, affordable, and actionable advice.

        Guidelines:
        - Tailor every recommendation to the company's industry, size, and AI maturity.
        - Assume the company has limited technical resources unless stated otherwise.
        - Prefer practical AI tools such as ChatGPT, Microsoft Copilot, Google Workspace AI, Notion AI, Zapier, Make.com, HubSpot AI, Power BI, or similar affordable solutions.
        - Avoid recommending enterprise infrastructure such as Snowflake, Redshift, Kubernetes, Data Lakes, AI Centers of Excellence, or hiring large AI teams unless the company is already highly mature.
        - If the company has fewer than 50 employees, focus on low-cost automation and quick wins.
        - Recommend realistic improvements that can be implemented within 30–90 days.
        - Never invent company information beyond what is provided.

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

        Executive Summary:
        ${input.executiveSummary}

        The user asks:

        "${input.question}"

        Respond using this format:

        ## Summary
        A short paragraph answering the question.

        ## Recommended Actions
        - Action 1
        - Action 2
        - Action 3

        ## Expected Impact
        Explain how these actions improve the company's AI readiness.

        Keep the response under 250 words.
        `;

    const completion =
      await openai.chat.completions.create({
        model: "openrouter/free",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    return (
      completion.choices[0].message.content ??
      "Sorry, I couldn't generate a response."
    );
  }
}
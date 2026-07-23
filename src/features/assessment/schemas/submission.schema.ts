import { z } from "zod";

export const LeadSchema = z.object({
  fullName: z.string().min(2),

  email: z.email(),

  companyName: z.string().min(2),

  industry: z.string(),

  teamSize: z.string(),
});

export const SubmissionSchema = z.object({
  lead: LeadSchema,

  answers: z.record(z.string(), z.string()),
});
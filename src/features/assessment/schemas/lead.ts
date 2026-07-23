import { z } from "zod";

export const leadSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  companyName: z.string().min(2),
  industry: z.string().min(2),
  teamSize: z.string().min(1, "Please select a team size"),
});

export type LeadForm = z.infer<typeof leadSchema>;
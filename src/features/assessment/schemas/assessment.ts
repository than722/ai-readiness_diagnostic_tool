import { z } from "zod";

export const assessmentSchema = z.record(
  z.string(),
  z.number().min(0).max(3)
);

export type AssessmentSchema = z.infer<
  typeof assessmentSchema
>;
// core/src/server/api/types/SoreThroatData.ts

import { z } from 'zod';

// Define the type for Sore Throat data
export const SoreThroatData = z.object({
  age: z.number(),
  gender: z.string(),
  existingMedicalConditions: z.string(),
  hasFever: z.boolean(),
  feverSeverity: z.number(),
  hasCough: z.boolean(),
  coughDescription: z.string(),
  hasFatigue: z.boolean(),
  hasShortnessOfBreath: z.boolean(),
  hasChestPain: z.boolean(),
  hasSputum: z.boolean(),
  sputumDescription: z.string(),
  hasWheezing: z.boolean(),
  troubleSleeping: z.boolean(),
  respiratoryExposure: z.string(),
  // Add more fields for other symptoms and severity levels
});

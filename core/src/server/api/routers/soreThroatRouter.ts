// core/src/server/api/services/SoreThroatsService.ts

import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import {
  calculateAsthmaProbability,
  calculatePneumoniaProbability,
} from "../utils/probabilityCalculations";

export const soreThroatRouter = createTRPCRouter({
  diagnose: publicProcedure
    .input(
      z.object({
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
      })
    )
    .query(({ input }) => {
      const pneumoniaProbability = calculatePneumoniaProbability(input);
      const asthmaProbability = calculateAsthmaProbability(input);

      const threshold = 0.5;

      let diagnosis = "";
      let response = "";

      if (pneumoniaProbability >= threshold && asthmaProbability >= threshold) {
        diagnosis = "Both Pneumonia and Asthma";
        response =
          "Based on your symptoms, there is a high probability of having both Pneumonia and Asthma. It is essential to consult a healthcare professional for a detailed evaluation and treatment.";
      } else if (pneumoniaProbability >= threshold) {
        diagnosis = "Pneumonia";
        response =
          "Based on your symptoms, there is a high probability of having Pneumonia. It is crucial to seek immediate medical attention for a proper diagnosis and treatment.";
      } else if (asthmaProbability >= threshold) {
        diagnosis = "Asthma";
        response =
          "Based on your symptoms, there is a high probability of having Asthma. It is important to consult a healthcare professional to manage and control your symptoms effectively.";
      } else {
        diagnosis = "No Respiratory Condition";
        response =
          "Based on your symptoms, there is no significant indication of a respiratory condition. However, if your symptoms persist or worsen, it is advisable to seek medical advice.";
      }

      return {
        diagnosis,
        response,
      };
    }),
});

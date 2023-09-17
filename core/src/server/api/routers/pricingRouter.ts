import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { provinces } from "@prisma/client";
import { TRPCError } from "@trpc/server";

const quoteType = z.object({
  OrganizationName: z.string(),
  OrganizationEmail: z.string(),
  OrganizationPhone: z.string(),
  description: z.string(),
  province: z.nativeEnum(provinces),
  city: z.string(),
});

type quoteType = z.infer<typeof quoteType>;

export const pricingRouter = createTRPCRouter({
  addNewQuote: publicProcedure
    .input(quoteType)
    .output(quoteType)
    .mutation(async ({ ctx, input }) => {
      const newQuote: quoteType = {
        ...input,
      };

      try {
        const createdQuote = await ctx.prisma.requestQuotes.create({
          data: newQuote,
        });
        return createdQuote;
      } catch (error) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Failed to create quote.",
        });
      }
    }),
});

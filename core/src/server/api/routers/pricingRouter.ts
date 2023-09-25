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

const orgInfo = z.object({
    OrganizationName: z.string(),
    city: z.string(),
    province: z.nativeEnum(provinces),
    address: z.string(),
    phone: z.string(),
    email: z.string(),
    website: z.string(),
    doctorName: z.string(),
}
)

type orgInfo = z.infer<typeof orgInfo>;

export const pricingRouter = createTRPCRouter({

    // createOrganization: publicProcedure.input(orgInfo)
    // .output(z.string()).mutation(async ({ ctx, input }) => {
    //
    //
    //
    //     return "success";
    //     }),


  addNewQuote: publicProcedure
    .input(quoteType)
    .output(quoteType)
    .mutation(async ({ ctx, input }) => {
      const newQuote: quoteType = {
        ...input,
      };

      try {
        return await ctx.prisma.requestQuote.create({
          data: newQuote,
        });
      } catch (error) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Failed to create quote.",
        });
      }
    }),
});
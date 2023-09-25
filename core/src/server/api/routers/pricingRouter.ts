import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { provinces } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { stripe } from "~/utils/stripe";

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

  checkUserIsActivated: publicProcedure
    .input(z.string())
    .output(z.boolean())
    .mutation(async ({ ctx, input }) => {
      try {
        const user = await ctx.prisma.doctor.findUnique({
          where: {
            clerk_id: input,
          },
        });

        if (user) {
          return user.Activated;
        } else {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "User not found.",
          });
        }
      } catch (error) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Failed to check if user is activated.",
        });
      }
    }),

  checkoutSession: publicProcedure
    .input(
      z.object({
        priceId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              price: input.priceId,
              quantity: 1,
            },
          ],
          mode: "subscription",
          success_url: `http://localhost:3000/sign-in`,
          cancel_url: `http://localhost:3000/stripePayment`,
          // success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/?success=true`,
          // cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/?canceled=true`,
        });

        const someFunc = async () => {};

        return session;
      } catch (error) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Failed to create checkout session. The error is: " + error,
        });
      }
    }),
});

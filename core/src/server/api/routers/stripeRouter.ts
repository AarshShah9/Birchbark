import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { stripe } from "~/utils/stripe";
import { TRPCError } from "@trpc/server";

const createNewSubscription = z.object({
  priceId: z.string(),
});

export const stripeRouter = createTRPCRouter({
  checkoutSession: publicProcedure
    .input(createNewSubscription)
    .output(z.string())
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
          success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/sign-in`,
          cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/stripePayment`,
        });

        const someFunc = async () => {};

        return session.url as string;
      } catch (error) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Failed to create checkout session. The error is: " + error,
        });
      }
    }),
});

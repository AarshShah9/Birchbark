import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { stripe } from "~/utils/stripe";
import { TRPCError } from "@trpc/server";
import { provinces } from "@prisma/client";

const createNewSubscription = z.object({
  priceId: z.string(),
  orgName: z.string(),
  city: z.string(),
  province: z.nativeEnum(provinces),
  address: z.string(),
  phone: z.string(),
  email: z.string(),
  website: z.string().optional(),
});

export const stripeRouter = createTRPCRouter({
  checkoutSession: publicProcedure
    .input(createNewSubscription)
    .output(z.string())
    .mutation(async ({ ctx, input }) => {
      try {
        // I need to create an instance of organization in my db
        const org = await ctx.prisma.organization.create({
          data: {
            stripePriceId: input.priceId,
            stripeCustomerId: ctx.userId,
            stripeSubscriptionStatus: "incomplete",
            name: input.orgName,
            city: input.city,
            province: input.province,
            address: input.address,
            phone: input.phone,
            email: input.email,
            website: input.website,
          },
        });

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
          // how can I pass an id here to stripe so that I can link it to my database after?
          metadata: { organizationId: org.id },
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

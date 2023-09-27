import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { stripe } from "~/utils/stripe";
import { TRPCError } from "@trpc/server";
import { provinces } from "@prisma/client";
import { env } from "~/env.mjs";

// take this input:

const createNewSubscription = z.object({
  priceId: z.string(),
  orgName: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    province: z.nativeEnum(provinces),
    postalCode: z.string(),
    apt: z.string().optional(),
  }),
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
        const address = await ctx.prisma.address.create({
          data: {
            street: input.address.street,
            city: input.address.city,
            province: input.address.province,
            postalCode: input.address.postalCode,
            apt: input.address.apt,
          },
        });

        const org = await ctx.prisma.organization.create({
          data: {
            stripePriceId: input.priceId,
            stripeCustomerId: ctx.userId,
            stripeSubscriptionStatus: "incomplete",
            name: input.orgName,
            address: {
              connect: {
                id: address.id,
              },
            },
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
          success_url: `${env.NEXT_PUBLIC_VERCEL_URL}/sign-in`,
          cancel_url: `${env.NEXT_PUBLIC_VERCEL_URL}/stripePayment`,
          metadata: { organizationId: org.id },
        });

        return session.url as string;
      } catch (error) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Failed to create checkout session. The error is: " + error,
        });
      }
    }),
});

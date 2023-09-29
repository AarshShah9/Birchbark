import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { stripe } from "~/utils/stripe";
import { TRPCError } from "@trpc/server";
import { $Enums, provinces } from "@prisma/client";
import { env } from "~/env.mjs";
import StripeSubscriptionStatus = $Enums.StripeSubscriptionStatus;

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
  // doctor information
  doctor: z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string(),
  }),
});

export const stripeRouter = createTRPCRouter({
  checkoutSession: publicProcedure
    .input(createNewSubscription)
    .output(z.string())
    .mutation(async ({ ctx, input }) => {
      try {
        const doctorData = {
          name: input.doctor.name,
          phoneNumber: input.doctor.phone,
          email: input.doctor.email,
          notificationOn: false,
        };

        const addressData = {
          street: input.address.street,
          city: input.address.city,
          province: input.address.province,
          postalCode: input.address.postalCode,
          apt: input.address.apt,
        };

        const orgData = {
          stripeSubscriptionStatus: "incomplete" as StripeSubscriptionStatus,
          name: input.orgName,
          phone: input.phone,
          email: input.email,
          website: input.website,
          activated: false,
        };

        const transaction = await ctx.prisma.$transaction([
          ctx.prisma.doctor.create({ data: doctorData }),
          ctx.prisma.address.create({ data: addressData }),
        ]);

        const [createdDoctor, createdAddress] = transaction;

        const org = await ctx.prisma.organization.create({
          data: {
            ...orgData,
            address: {
              connect: { id: createdAddress.id },
            },
            doctor: {
              connect: { id: createdDoctor.id },
            },
          },
        });

        const customer = await stripe.customers.create({
          email: org.email,
          name: org.name,
          // use metadata to link this Stripe customer to internal user id
          metadata: {
            organizationId: org.id,
            doctorId: createdDoctor.id,
          },
        });

        // update with new customer id
        await ctx.prisma.organization.update({
          where: {
            id: org.id,
          },
          data: {
            stripeCustomerId: customer.id,
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
          metadata: { organizationId: org.id, doctorId: createdDoctor.id },
          customer: customer.id,
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

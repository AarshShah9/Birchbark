import type { PrismaClient } from "@prisma/client";
import { $Enums } from "@prisma/client";
import type Stripe from "stripe";
import StripeSubscriptionStatus = $Enums.StripeSubscriptionStatus;

export const handleSubscriptionCreatedOrUpdated = async ({
  event,
  prisma,
}: {
  event: Stripe.Event;
  prisma: PrismaClient;
}) => {
  const subscription = event.data.object as Stripe.Subscription;
  const orgId = subscription.metadata.organizationId;

  try {
    // update user with subscription data
    await prisma.organization.update({
      where: {
        id: parseInt(orgId ?? "-1"),
      },
      data: {
        stripeSubscriptionId: subscription.id,
        stripeSubscriptionStatus:
          subscription.status as StripeSubscriptionStatus,
      },
    });
  } catch (error) {
    console.error(error);
  }
};
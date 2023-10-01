import type { PrismaClient } from "@prisma/client";
import { $Enums } from "@prisma/client";
import type Stripe from "stripe";
import StripeSubscriptionStatus = $Enums.StripeSubscriptionStatus;

export const handleSubscriptionCreated = async ({
  event,
  prisma,
}: {
  event: Stripe.Event;
  prisma: PrismaClient;
}) => {
  const subscription = event.data.object as Stripe.Subscription;
  const orgId = subscription.metadata.organizationId;
  const doctorId = subscription.metadata.doctorId;

  try {
    if (subscription.status !== "active") {
      return;
    }

    // update user with subscription data
    const org = await prisma.organization.update({
      where: {
        id: parseInt(orgId ?? "-1"),
      },
      data: {
        stripeSubscriptionId: subscription.id,
        stripeSubscriptionStatus:
          subscription.status as StripeSubscriptionStatus,
        activated: true,
      },
    });
    const doctor = await prisma.doctor.findUnique({
      where: {
        id: parseInt(doctorId ?? "-1"),
      },
    });

    fetch("https://api.clerk.com/v1/invitations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
      body: JSON.stringify({
        email_address: doctor?.email,
        public_metadata: {
          doctorId: doctor?.id,
        },
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create Clerk user");
        }
        return response.json();
      })
      .then((clerkUserData) => {
        prisma.doctor.update({
          where: {
            id: doctor?.id,
          },
          data: {
            clerkId: clerkUserData.id,
          },
        });
        return clerkUserData;
      })
      .then((clerkUserData) => {
        return fetch("https://api.clerk.com/v1/organizations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
          },
          body: JSON.stringify({
            name: org.name,
            created_by: clerkUserData.id,
            private_metadata: {
              organizationId: org.id,
            },
          }),
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create Clerk organization");
        }
        return response.json();
      })
      .then((clerkOrgData) => {
        return prisma.organization.update({
          where: {
            id: org.id,
          },
          data: {
            clerkId: clerkOrgData.id,
          },
        });
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (error) {
    console.error(error);
  }
};

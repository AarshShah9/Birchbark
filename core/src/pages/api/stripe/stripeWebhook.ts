import type { NextApiRequest, NextApiResponse } from "next";
import type Stripe from "stripe";
import { buffer } from "micro";
import { handleSubscriptionCreated } from "~/server/api/utils/stripeWebHookHandlers";
import { stripe } from "~/utils/stripe";
import { prisma } from "~/server/db";
import requestIp from "request-ip";

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

// const webhookSecret = env.STRIPE_WEBHOOK_SECRET;
const webhookSecret =
  "whsec_8ca6e4f19defc64b47cc911b0e467351591a48bf542e0637c4fb38463c22ec63";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const validIps = [
    "3.18.12.63",
    "3.130.192.231",
    "13.235.14.237",
    "13.235.122.149",
    "18.211.135.69",
    "35.154.171.200",
    "52.15.183.38",
    "54.88.130.119",
    "54.88.130.237",
    "54.187.174.169",
    "54.187.205.235",
    "54.187.216.72",
  ];
  if (!validIps.includes(requestIp.getClientIp(req) ?? "null")) {
    res.status(403).send("Forbidden");
    return;
  }

  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig as string,
        webhookSecret as string
      );

      // Handle the event
      switch (event.type) {
        case "customer.subscription.created":
          // Used to provision services as they are added to a subscription.
          await handleSubscriptionCreated({
            event,
            prisma,
          });
          break;
        // case "customer.subscription.updated":
        //   // Used to provision services as they are updated.
        //   // await handleSubscriptionCreatedOrUpdated({
        //   //     event,
        //   //     prisma,
        //   // });
        //   break;
        // case "invoice.payment_failed":
        //   // If the payment fails or the customer does not have a valid payment method,
        //   //  an invoice.payment_failed event is sent, the subscription becomes past_due.
        //   // Use this webhook to notify your user that their payment has
        //   // failed and to retrieve new card details.
        //   // Can also have Stripe send an email to the customer notifying them of the failure. See settings: https://dashboard.stripe.com/settings/billing/automatic
        //   break;
        // case "customer.subscription.deleted":
        //   // handle subscription cancelled automatically based
        //   // upon your subscription settings.
        //   // await handleSubscriptionCanceled({
        //   //     event,
        //   //     prisma,
        //   // });
        //   break;
        // default:
        // // Unexpected event type
      }

      // record the event in the database
      await prisma.stripeEvent.create({
        data: {
          id: event.id,
          type: event.type,
          object: event.object,
          apiVersion: event.api_version,
          account: event.account,
          created: new Date(event.created * 1000), // convert to milliseconds
          data: {
            object: event.data.object,
            previous_attributes: event.data.previous_attributes,
          },
          livemode: event.livemode,
          pendingWebhooks: event.pending_webhooks,
          request: {
            id: event.request?.id,
            idempotency_key: event.request?.idempotency_key,
          },
        },
      });

      res.json({ received: true });
    } catch (err) {
      res.status(400).send(err);
      return;
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

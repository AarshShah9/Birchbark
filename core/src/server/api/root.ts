import { createTRPCRouter } from "~/server/api/trpc";
import { soreThroatRouter } from "~/server/api/routers/soreThroatRouter";
import { pricingRouter } from "~/server/api/routers/pricingRouter";
import { doctorRouter } from "~/server/api/routers/doctorRouter";
import { stripeRouter } from "~/server/api/routers/stripeRouter";
import { imageRouter } from "~/server/api/routers/imageRouter";
import { wikiRouter } from "~/server/api/routers/wikiRouter";
import { eventsRouter } from "~/server/api/routers/eventsRouter";
import { appointmentDoctorRouter } from "~/server/api/routers/appointmentDoctorRouter";
import {testRouter} from "~/server/api/routers/testRouter";
import {configRouter} from "~/server/api/routers/configRouter";

/*
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  sourThroats: soreThroatRouter,
  appointment: appointmentDoctorRouter,
  pricing: pricingRouter,
  doctor: doctorRouter,
  stripe: stripeRouter,
  image: imageRouter,
  wiki: wikiRouter,
  events: eventsRouter,
  config: configRouter
  test: testRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

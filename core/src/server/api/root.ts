import { createTRPCRouter } from "~/server/api/trpc";
import {SoreThroatsService } from "~/server/api/routers/SoreThroatService";
import { appointmentRouter } from "~/server/api/routers/appointmentRouter";
import { pricingRouter } from "~/server/api/routers/pricingRouter";

/*
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  sourThroats: SoreThroatsService,
  appointment: appointmentRouter,
  pricing: pricingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

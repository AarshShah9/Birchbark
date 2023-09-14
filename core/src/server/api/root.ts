import {createTRPCRouter} from "~/server/api/trpc";
import {appointmentRouter} from "~/server/api/routers/appointmentRouter";
import {configRouter} from "~/server/api/routers/configRouter";


/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    appointment: appointmentRouter,
    config: configRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;

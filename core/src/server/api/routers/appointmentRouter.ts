import {createTRPCRouter, privateProcedure} from "~/server/api/trpc";

export const appointmentRouter = createTRPCRouter({
    getAll: privateProcedure.query(({ctx, input}) => {
        return ctx.prisma.appointment.findMany()
    }),
});
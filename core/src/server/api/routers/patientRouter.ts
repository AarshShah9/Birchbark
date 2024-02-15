import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const patientRouter = createTRPCRouter({
  getMe: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.patient.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
    });
  }),
});

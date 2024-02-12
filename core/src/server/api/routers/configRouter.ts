import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const configRouter = createTRPCRouter({
  isUserDoctor: privateProcedure.query(async ({ ctx }) => {
    // check if user is a doctor via ctx.user
    const doctor = await ctx.prisma.doctor.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
    });

    return !!doctor;
  }),
});

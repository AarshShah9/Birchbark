import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const patientRouter = createTRPCRouter({
  getDoctorsPatients: privateProcedure.query(async ({ ctx }) => {
    const doctor = await ctx.prisma.doctor.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
      include: {
        patient: true,
      },
    });

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    return doctor.patient;
  }),
});

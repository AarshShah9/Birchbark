import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const patientRouter = createTRPCRouter({
  getMe: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.patient.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
    });
  }),
  getAllPatients: publicProcedure.query(async ({ ctx }) => {
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

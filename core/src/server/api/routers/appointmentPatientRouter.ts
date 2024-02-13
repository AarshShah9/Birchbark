import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const appointmentPatientRouter = createTRPCRouter({
  getAllUpcomingAppointments: privateProcedure.query(async ({ ctx }) => {
    const patient = await ctx.prisma.patient.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
      include: {
        appointments: true,
        doctor: true,
        Organization: true,
      },
    });

    if (!patient) {
      throw new Error("Patient not found");
    }

    patient.appointments = patient.appointments.filter(
      (appointment) => new Date(appointment.endTime) > new Date()
    );

    return patient;
  }),

  getAllOldAppointments: privateProcedure.query(async ({ ctx }) => {
    const patient = await ctx.prisma.patient.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
      include: {
        appointments: true,
        doctor: true,
        Organization: true,
      },
    });

    if (!patient) {
      throw new Error("Patient not found");
    }

    patient.appointments = patient.appointments.filter(
      (appointment) => new Date(appointment.endTime) <= new Date()
    );

    return patient;
  }),

  createNewAppointment: privateProcedure
    .input(
      z.object({
        // confirmAppointment: z.boolean(),
        firstName: z.string(),
        lastName: z.string(),
        birthday: z.string(),
        status: z.string(),
        reasonOfVisit: z.string(),
        medicalIssue: z.string(),
        bookingDay: z.string(),
        needCounsellor: z.boolean(),
        needDoctor: z.boolean(),
        needPsychologist: z.boolean(),
        clickedWellness: z.boolean(),
        clickedChatWithDoctor: z.boolean(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log(input);
      return null;
    }),
});

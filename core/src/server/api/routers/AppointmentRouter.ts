import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const AppointmentRouter = createTRPCRouter({
  createAppointment: privateProcedure
    .input(
      z.object({
        clerkId: z.string(),
        subject: z.string(),
        startTime: z.date(),
        endTime: z.date(),
        description: z.string().optional(),
        isAllDay: z.boolean().optional(),
        isReadOnly: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Start a transaction to ensure atomicity
      return await ctx.prisma.$transaction(async (prisma) => {
        // Find the patient using the clerkId provided and include the associated doctor
        const patientWithDoctor = await prisma.patient.findUnique({
          where: {
            clerkId: input.clerkId,
          },
          include: {
            doctor: true, // Include the doctor in the result
          },
        });

        if (!patientWithDoctor) {
          throw new Error("Patient not found");
        }

        if (!patientWithDoctor.doctor) {
          throw new Error("Associated doctor for the patient not found");
        }

        // Create a new appointment in a "Pending" state, directly linking to the found Doctor and Patient
        return await prisma.appointment.create({
          data: {
            subject: input.subject,
            startTime: input.startTime,
            endTime: input.endTime,
            description: input.description,
            isAllDay: input.isAllDay || false,
            isReadOnly: input.isReadOnly || false,
            statusM: "Pending",
            doctorId: patientWithDoctor.doctorId, // Use the associated doctor's ID
            patientId: patientWithDoctor.id, // Use the patient's ID
          },
        });
      });
    }),
});

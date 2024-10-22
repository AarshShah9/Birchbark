import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { Status } from "@prisma/client";

export const appointmentDoctorRouter = createTRPCRouter({
  getDoctorAvailability: privateProcedure.query(async ({ ctx }) => {
    // Find the doctor using the clerkId provided
    const doctor = await ctx.prisma.doctor.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
      include: {
        Availability: true, // Include the availability in the result
      },
    });

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    return doctor.Availability;
  }),

  getPatient: privateProcedure
    .input(
      z.object({
        input: z.number(), // We are passing the patient ID as the input
      })
    )
    .query(async ({ input, ctx }) => {
      const patient = await ctx.prisma.patient.findUnique({
        where: {
          id: input.input, // This is the appointment ID
        },
      });

      if (!patient) {
        throw new Error("patient not found");
      }
      return patient;
    }),

  getAllAppointments: privateProcedure.query(async ({ input, ctx }) => {
    // Find the doctor using ClerkId
    const doctor = await ctx.prisma.doctor.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
      // TODO If doctor has many appointments, consider using pagination here
      include: {
        appointments: {
          include: {
            patient: true, // Include patient information in the result
          },
        },
      },
    });

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    return doctor.appointments;
  }),

  removeAppointment: privateProcedure
    .input(
      z.object({
        appointmentId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Remove the appointment with the given ID
      return await ctx.prisma.appointment.delete({
        where: {
          id: input.appointmentId,
        },
      });
    }),

  rescheduleAppointment: privateProcedure
    .input(
      z.object({
        appointmentId: z.number(),
        newStartTime: z.date(),
        newEndTime: z.date(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Update the appointment with the new date and time
      return await ctx.prisma.appointment.update({
        where: {
          id: input.appointmentId,
        },
        data: {
          startTime: input.newStartTime,
          endTime: input.newEndTime,
          statusM: "Confirmed",
        },
      });
    }),

  updateAppointment: privateProcedure
    .input(
      z.object({
        appointmentId: z.number(),
        subject: z.string(),
        startTime: z.date(),
        endTime: z.date(),
        description: z.string().optional(),
        isAllDay: z.boolean().optional(),
        isReadOnly: z.boolean().optional(),
        patientId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Update the appointment with the new date and time
      return await ctx.prisma.appointment.update({
        where: {
          id: input.appointmentId,
        },
        data: {
          startTime: input.startTime,
          endTime: input.endTime,
          subject: input.subject,
          description: input.description,
          isAllDay: input.isAllDay || false,
          isReadOnly: input.isReadOnly || false,
          patientId: input.patientId,
        },
      });
    }),

  updateAppointmentStatus: privateProcedure
    .input(
      z.object({
        appointmentId: z.number(),
        newStatus: z.nativeEnum(Status),
      })
    )
    .mutation(async ({ input, ctx }) => {
      // Update the status of the appointment
      return await ctx.prisma.appointment.update({
        where: {
          id: input.appointmentId,
        },
        data: {
          statusM: input.newStatus,
        },
      });
    }),

  pendingAppointments: privateProcedure.query(async ({ ctx }) => {
    // Find the doctor using the clerkId provided
    const doctor = await ctx.prisma.doctor.findUnique({
      where: {
        clerkId: ctx.userId as string,
      },
    });

    if (!doctor) {
      throw new Error("Doctor not found");
    }

    // Fetch all pending appointments for the found doctor
    return await ctx.prisma.appointment.findMany({
      where: {
        doctorId: doctor.id,
        statusM: "Pending",
      },
      include: {
        patient: true, // Include patient information in the result
      },
    });
  }),

  createAppointment: privateProcedure
    .input(
      z.object({
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
            clerkId: ctx.userId as string,
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
  createAppointmentDoctor: privateProcedure
    .input(
      z.object({
        subject: z.string(),
        startDate: z.string(),
        startTime: z.string(),
        endDate: z.string(),
        endTime: z.string(),
        description: z.string().optional(),
        isAllDay: z.boolean().optional(),
        isReadOnly: z.boolean().optional(),
        patientId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Start a transaction to ensure atomicity
      return await ctx.prisma.$transaction(async (prisma) => {
        const doctor = await prisma.doctor.findUnique({
          where: {
            clerkId: ctx.userId as string,
          },
        });

        if (!doctor) {
          throw new Error("Doctor not found");
        }

        const patient = await prisma.patient.findUnique({
          where: {
            id: Number(input.patientId),
          },
        });

        if (!patient) {
          throw new Error("Patient not found");
        }

        const endFullDate = new Date(input.endDate + " " + input.endTime);
        const startFullDate = new Date(input.startDate + " " + input.startTime);

        return await prisma.appointment.create({
          data: {
            subject: input.subject,
            startTime: startFullDate,
            endTime: endFullDate,
            description: input.description,
            isAllDay: input.isAllDay || false,
            isReadOnly: input.isReadOnly || false,
            statusM: "Confirmed",
            doctorId: doctor.id,
            patientId: patient.id,
          },
        });
      });
    }),
});

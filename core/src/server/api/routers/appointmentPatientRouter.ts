import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const appointmentPatientRouter = createTRPCRouter({
  getPatientsDoctorAvailability: privateProcedure
    .input(
      z.object({
        date: z.string(), // in the format "2021-08-01" (YYYY-MM-DD)
      })
    )
    .output(
      z.array(
        z.object({
          startTime: z.string(),
          endTime: z.string(),
          interval: z.number(),
        })
      )
    )
    .query(async ({ ctx, input }) => {
      // This end point will get the userId from the context and use it to find the patient
      // Then it will find the patient's doctor using the patient's doctorId
      // Then it will use the doctorId to find the doctor's availability by take a date input and checking when the has appointments
      // in the 9-5 time frame. It will then return the doctor's availability which is the complement of the doctor's appointments
      // These should be return as a list of available times with this format:
      // {startTime: "2021-08-01T09:00:00.000Z", endTime: "2021-08-01T09:30:00.000Z", interval: 30}

      // Find the patient using the clerkId provided
      const patient = await ctx.prisma.patient.findUnique({
        where: {
          clerkId: ctx.userId as string,
        },
        include: {
          doctor: true, // Include the doctor in the result
        },
      });

      if (!patient) {
        throw new Error("Patient not found");
      }

      // Find the doctor using the doctorId
      const doctor = await ctx.prisma.doctor.findUnique({
        where: {
          id: patient.doctorId,
        },
        include: {
          appointments: true, // Include the appointments in the result
        },
      });

      if (!doctor) {
        throw new Error("Doctor not found");
      }

      // Find the doctor's availability
      const inputDate = new Date(input.date);
      const startOfDay = new Date(inputDate.setHours(9, 0, 0, 0));
      const endOfDay = new Date(inputDate.setHours(17, 0, 0, 0));

      // Filter the doctor's appointments to only include those within the input date
      const appointmentsForDay = doctor.appointments.filter((appointment) => {
        const appointmentStart = new Date(appointment.startTime);
        const appointmentEnd = new Date(appointment.endTime);
        return appointmentStart >= startOfDay && appointmentEnd <= endOfDay;
      });

      // Sort appointments by startTime to ensure they are in chronological order
      appointmentsForDay.sort(
        (a, b) =>
          new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
      );

      // Calculate available time slots
      let availableSlots = [];
      let lastEndTime = startOfDay;

      appointmentsForDay.forEach((appointment) => {
        const appointmentStart = new Date(appointment.startTime);
        if (appointmentStart > lastEndTime) {
          // There's a gap between appointments
          availableSlots.push({
            startTime: lastEndTime.toISOString(),
            endTime: appointmentStart.toISOString(),
            interval:
              (appointmentStart.getTime() - lastEndTime.getTime()) /
              (60 * 1000), // Calculate interval in minutes
          });
        }
        lastEndTime = new Date(appointment.endTime); // Update lastEndTime to the end of the current appointment
      });

      // Check for a slot after the last appointment till the end of the working day
      if (lastEndTime < endOfDay) {
        availableSlots.push({
          startTime: lastEndTime.toISOString(),
          endTime: endOfDay.toISOString(),
          interval: (endOfDay.getTime() - lastEndTime.getTime()) / (60 * 1000), // Calculate interval in minutes
        });
      }
      // Return the available slots
      return availableSlots;
    }),

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

import { z } from "zod";
import { privateProcedure, createTRPCRouter } from "~/server/api/trpc";

export const eventsRouter = createTRPCRouter({
  getAllUpcomingEvents: privateProcedure
    .output(
      z.array(
        z.object({
          id: z.number(),
          title: z.string(),
          date: z.date(),
          imageUrl: z.string().optional(), // Assuming an event might have a dedicated thumbnail or main image
        })
      )
    )
    .query(async ({ ctx }) => {
      const currentDate = new Date();

      return await ctx.prisma.event
        .findMany({
          where: {
            date: {
              gt: currentDate, // Filter events that occur after the current date
            },
          },
          select: {
            id: true,
            title: true,
            date: true,
            content: {
              where: {
                type: "IMAGE", // Get the main image for the event, if it exists
              },
              take: 1, // Assuming you only want one image for the listing
            },
          },
          orderBy: {
            date: "asc", // Order by upcoming dates first
          },
        })
        .then((events) =>
          events.map((event) => ({
            ...event,
            imageUrl: event.content[0]?.content, // extract the image URL from the content block
          }))
        );
    }),

  getEventById: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .output(
      z.object({
        id: z.number(),
        title: z.string(),
        date: z.date(),
        content: z.array(
          z.object({
            type: z.enum(["TEXT", "IMAGE", "VIDEO"]),
            content: z.string(),
            order: z.number().optional(),
          })
        ),
      })
    )
    .query(async ({ ctx, input }) => {
      const event = await ctx.prisma.event.findUnique({
        where: {
          id: input.id,
        },
        include: {
          content: {
            orderBy: {
              order: "asc",
            },
          },
        },
      });

      if (!event) {
        throw new Error("Event not found");
      }

      return event;
    }),
});

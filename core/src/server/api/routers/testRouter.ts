import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const testRouter = createTRPCRouter({
  testCreate: privateProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      // Create a new TestEncrypted model
      return ctx.prisma.testEncryption.create({
        data: {
          name: input.name,
        },
      });
    }),

  testGet: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.testEncryption.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});

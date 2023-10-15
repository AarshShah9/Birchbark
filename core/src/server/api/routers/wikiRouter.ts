import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const wikiRouter = createTRPCRouter({
  getAll: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .output(z.array(z.string()))
    .query(({ ctx, input }) => {
      const article = ctx.prisma.article.findUnique({
        where: {
          id: input.id,
        },
        include: {},
      });

      return ["hello", "world"];
    }),
});

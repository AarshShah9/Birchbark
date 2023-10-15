import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const wikiRouter = createTRPCRouter({
  getArticleContent: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .output(
      z.array(
        z.object({
          id: z.number(),
          type: z.enum(["TEXT", "IMAGE", "VIDEO"]),
          content: z.string(),
          order: z.number(),
          articleId: z.number(),
        })
      )
    )
    .query(async ({ ctx, input }) => {
      const article = await ctx.prisma.article.findUnique({
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

      if (!article) {
        throw new Error("Article not found");
      }

      return article.content;
    }),
});

import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const wikiRouter = createTRPCRouter({
  getCategories: privateProcedure
    .output(
      z.array(
        z.object({
          id: z.number(),
          name: z.string(),
        })
      )
    )
    .query(async ({ ctx }) => {
      return await ctx.prisma.category.findMany({
        select: {
          id: true,
          name: true,
        },
      });
    }),

  getArticlesByCategory: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .output(
      z.array(
        z.object({
          id: z.number(),
          title: z.string(),
          description: z.string().optional().nullable(),
        })
      )
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.article.findMany({
        where: {
          categoryId: input.id,
        },
        select: {
          id: true,
          title: true,
          description: true,
        },
      });
    }),

  getArticleContent: privateProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .output(z.string())
    .query(async ({ ctx, input }) => {
      const article = await ctx.prisma.article.findUnique({
        where: {
          id: input.id,
        },
      });

      if (!article) {
        throw new Error("Article not found");
      }

      return article.contentUrl;
    }),

  searchArticlesByTitle: privateProcedure
    .input(
      z.object({
        title: z.string(),
      })
    )
    .output(
      z.array(
        z.object({
          id: z.number(),
          title: z.string(),
          description: z.string().optional().nullable(),
        })
      )
    )
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.article.findMany({
        where: {
          title: {
            contains: input.title,
          },
        },
        select: {
          id: true,
          title: true,
          description: true,
        },
      });
    }),
});

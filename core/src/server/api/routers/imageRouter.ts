import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { z } from "zod";
import cloudinary from "~/utils/cloudinary";

export const imageRouter = createTRPCRouter({
  getImages: privateProcedure
    .input(
      z.object({
        cursor: z.string().optional(),
        limit: z.number().min(1).max(100),
        search: z.string().optional(),
      })
    )
    .output(
      z.object({
        images: z.array(z.string()),
        nextCursor: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const folderPath = "symptom360";
      const baseExpression = `folder:${folderPath} AND resource_type:image`;
      const searchExpression = input.search
        ? `tags:${input.search}* AND ${baseExpression}`
        : baseExpression;

      const searchQuery = cloudinary.v2.search
        .expression(searchExpression)
        .sort_by("created_at", "desc")
        .max_results(input.limit);

      if (input.cursor) {
        searchQuery.next_cursor(input.cursor);
      }

      const { resources, next_cursor } = await searchQuery.execute();

      return {
        images: resources.map((image: any) => image.secure_url),
        nextCursor: next_cursor,
      };
    }),
});

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";
import { z } from "zod";
import cloudinary from "~/utils/cloudinary";

export const imageRouter = createTRPCRouter({
  getImages: privateProcedure
    .input(
      z.object({
        start: z.number(),
        limit: z.number(),
        search: z.string().optional(),
      })
    )
    .output(z.array(z.string()))
    .query(async ({ ctx, input }) => {
      const { resources } = await cloudinary.search
        .expression("resource_type:image")
        .sort_by({ created_at: "desc" })
        .max_results(input.limit)
        .offset(input.start)
        .execute();

      return resources.map((image: any) => image.secure_url);
    }),
});

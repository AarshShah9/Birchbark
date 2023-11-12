import {createTRPCRouter, privateProcedure} from "~/server/api/trpc";
import {z} from "zod";
import cloudinary from "~/utils/cloudinary";
import findSimilarWords from "~/utils/semantic";
import tagsList from "~/enums/tags";


const handleSemantics = (searchTerm: string | undefined) => {
    if (!searchTerm) {
        return "";
    }

    // Check if the term is in the tags list, else find a similar word
    if (tagsList.includes(searchTerm)) {
        return searchTerm;
    } else {
        return findSimilarWords(searchTerm, tagsList);
    }
}

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


      // NLP based search
     let searchTerm = handleSemantics(input.search);
     console.log("searchTerm", searchTerm);

      const searchExpression = input.search
        ? `tags:${searchTerm}* AND ${baseExpression}`
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

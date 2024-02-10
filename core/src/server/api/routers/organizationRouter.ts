import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const organizationRouter = createTRPCRouter({
  getAllOrganizations: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.organization.findMany();
  }),
});

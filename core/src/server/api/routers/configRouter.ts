import {createTRPCRouter, privateProcedure} from "~/server/api/trpc";

export const configRouter = createTRPCRouter({
    newOrganizationSetup: privateProcedure.mutation(({ctx, input}) => {

    }
});
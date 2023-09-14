import {createTRPCRouter, privateProcedure} from "~/server/api/trpc";
import {z} from "zod";
import {encrypt, decrypt} from "~/utils/encryption";

export const configRouter = createTRPCRouter({
});


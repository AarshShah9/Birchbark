import {z} from 'zod';
import {createTRPCRouter, publicProcedure} from '~/server/api/trpc';

export const doctorRouter = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return ctx.prisma.doctor.findMany();
    })
})


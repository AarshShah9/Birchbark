import {z} from 'zod';
import {createTRPCRouter} from '~/server/api/trpc';
import {PrismaClient} from '@prisma/client';

export type MyContext = {
    prisma: PrismaClient;
    // Add other context properties as needed
    // ...
};

export const doctorRouter: TRPCRouter<MyContext> = createTRPCRouter({
    query: {
        getAll: {
            resolve: async ({ctx}) => {
                return ctx.prisma.doctor.findMany();
            },
        },
        getById: {
            input: {
                id: z.number(),
            },
            resolve: async ({ctx, input}) => {
                const {id} = input;
                const doctor = await ctx.prisma.doctor.findUnique({
                    where: {id},
                });

                if (!doctor) {
                    throw new Error('Doctor not found');
                }

                return doctor;
            },
        },
    },
    mutation: {
        create: {
            input: z.object({
                firstName: z.string(),
                lastName: z.string(),
                email: z.string(),
                phone: z.string(),
                specialty: z.string().optional(),
            }),
            resolve: async ({ctx, input}) => {
                const doctor = await ctx.prisma.doctor.create({
                    data: input,
                });
                return doctor;
            },
        },
        update: {
            input: z.object({
                id: z.number(),
                firstName: z.string().optional(),
                lastName: z.string().optional(),
                email: z.string().optional(),
                phone: z.string().optional(),
                specialty: z.string().optional(),
            }),
            resolve: async ({ctx, input}) => {
                const {id, ...data} = input;
                const doctor = await ctx.prisma.doctor.update({
                    where: {id},
                    data,
                });
                return doctor;
            },
        },
        delete: {
            input: z.object({
                id: z.number(),
            }),
            resolve: async ({ctx, input}) => {
                const {id} = input;
                const doctor = await ctx.prisma.doctor.delete({
                    where: {id},
                });
                return doctor;
            },
        },
    },
});
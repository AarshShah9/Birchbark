import {z} from 'zod';
import {createTRPCRouter, publicProcedure} from '~/server/api/trpc';

export const testRouter = createTRPCRouter({
    getAll: publicProcedure.input(z.object(
        {
            name: z.string()
        }
        )

    ).mutation(({ctx, input}) => {
        // Create a new TestEncrypted model
        return ctx.prisma.testEncryption.create({
            data: {

                name: input.name,
            },
        });
        }
        )
    })


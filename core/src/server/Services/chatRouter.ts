import { createTRPCRouter, privateProcedure } from "~/server/api/trpc"; // Adjust the import path as per your project structure
import { prisma } from "~/server/db"; // Adjust this import too
import { createTRPCContext } from "../api/trpc";

type TRPCContext = ReturnType<typeof createTRPCContext>;

// Define the procedures
const allChats = {
    type: "query",
    resolve: async ({ ctx }: { ctx: TRPCContext }) => {
        const chats = (await ctx).prisma.chat.findMany({
            include: {
                messages: true,
            },
        });
        return chats;
    },
};

const getChat = {
    type: "query",
    input: (z) => z.number(),
    resolve: async ({ input, ctx }) => {
        const chat = await ctx.prisma.chat.findUnique({
            where: { id: input },
            include: {
                messages: true,
            },
        });
        if (!chat) throw new Error("Chat not found");
        return chat;
    },
};

const createMessage = {
    type: "mutation",
    input: (z) => z.object({
        chatId: z.number(),
        content: z.string(),
    }),
    resolve: async ({ input, ctx }) => {
        const message = await ctx.prisma.message.create({
            data: {
                content: input.content,
                chatId: input.chatId,
                senderId: ctx.currentUser.id, // Assuming ctx.currentUser contains the authenticated user
            },
        });
        return message;
    },
};

const createChat = {
    type: "mutation",
    input: (z) => z.object({
        doctorId: z.number(),
        patientId: z.number(),
    }),
    resolve: async ({ input, ctx }) => {
        const chat = await ctx.prisma.chat.create({
            data: {
                doctorId: input.doctorId,
                patientId: input.patientId,
            },
        });
        return chat;
    },
};

// Create the router
export const chatRouter = createTRPCRouter({
    procedures: {
        allChats,
        getChat,
        createMessage,
        createChat
    }
});

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc"; // Adjust the import path as per your project structure
import { prisma } from "~/server/db"; // Adjust this import too
import { createTRPCContext } from "../api/trpc";
import * as z from 'zod';

type TRPCContext = ReturnType<typeof createTRPCContext>;

const createChatInputSchema = z.object({
    doctorId: z.number(),
    patientId: z.number(),
  });

type CreateChatInput = z.infer<typeof createChatInputSchema>;

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
    input: z.number(),
    resolve: async ({ input, ctx }: { input: number, ctx: TRPCContext }) => {
        const chat = (await ctx).prisma.chat.findUnique({
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
    input: z.object({
        chatId: z.number(),
        content: z.string(),
    }),
    resolve: async ({ input, ctx }: { input: { chatId: number; content: string }, ctx: TRPCContext }) => {
        const currentUser = (await ctx).currentUser;
        if (!currentUser || !currentUser.id) {
            throw new Error("Current user or user ID not found");
        }

        const senderId = parseInt(currentUser.id, 10);

        const message = (await ctx).prisma.message.create({
            data: {
                content: input.content,
                chatId: input.chatId,
                senderId: senderId, 
            },
        });
        return message;
    },
};


const createChat = {
    type: "mutation",
    input: createChatInputSchema,
    resolve: async ({ input, ctx }: { input: CreateChatInput, ctx: TRPCContext }) => {
        const chat = (await ctx).prisma.chat.create({
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

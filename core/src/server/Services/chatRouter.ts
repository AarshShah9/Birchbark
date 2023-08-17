import { createTRPCRouter, privateProcedure } from "~/server/api/trpc"; // Adjust the import path as per your project structure
import { prisma } from "~/server/db"; // Adjust this import too
import { createTRPCContext } from "../api/trpc";
import * as z from 'zod';

export const chatRouter = createTRPCRouter({
  
  allChats: privateProcedure.query(async ({ ctx }) => {
    const chats = await ctx.prisma.chat.findMany({
      include: {
        messages: true,
      },
    });
    return chats;
  }),
  
  getChat: privateProcedure.input(z.object({ chatId: z.number() })).query(async ({ ctx, input }) => {
    const chat = await ctx.prisma.chat.findUnique({
      where: { id: input.chatId },
      include: {
        messages: true,
      },
    });
    if (!chat) throw new Error("Chat not found");
    return chat;
  }),
  
  createMessage: privateProcedure.input(z.object({
    chatId: z.number(),
    content: z.string(),
  })).mutation(async ({ ctx, input }) => {
    const currentUser = await ctx.currentUser;
        if (!currentUser || !currentUser.id) {
            throw new Error("Current user or user ID not found");
        }

        const senderId = parseInt(currentUser.id, 10);

        const message = await ctx.prisma.message.create({
            data: {
                content: input.content,
                chatId: input.chatId,
                senderId: senderId, 
            },
        });
        return message;
  }),
  
  createChat: privateProcedure.input(z.object({
    doctorId: z.number(),
    patientId: z.number(),
  })).mutation(async ({ ctx, input }) => {
    const chat = await ctx.prisma.chat.create({
      data: {
        doctorId: input.doctorId,
        patientId: input.patientId,
      },
    });
    return chat;
  }),
});
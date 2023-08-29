import { createTRPCContext, wss } from "~/server/api/trpc";
import { IncomingMessage } from "http";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc"; // Adjust the import path as per your project structure
import { prisma } from "~/server/db"; // Adjust this import too
import { chatRouter } from "../Services/chatRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 * 
 */

/**
 * We will need these messageData and Context types later
 */
// type MessageData = {
//   content: string;
//   chatId: number;
// };

// type Context = {
//   prisma: {
//     message: {
//       create: (data: { data: MessageData & { senderId: number } }) => Promise<any>;
//     };
//   };
//   currentUser: {
//     id: string;
//   };
// };

export const appRouter = createTRPCRouter({});

export const config = {
  api: {
    bodyParser: false,
  },
};

// async function handleWebSocketMessage(data: MessageData, ctx: Context) {
//   const message = await ctx.prisma.message.create({
//     data: {
//       content: data.content,
//       chatId: data.chatId,
//       senderId: parseInt(ctx.currentUser.id, 10),
//     },
//   });
//   return message;
// }

// export default function handler(req: IncomingMessage, res: any) {
//     if (req.method === 'GET' && req.headers.upgrade === 'websocket') {
//       wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
//         wss.emit('connection', ws, req);
//       });
//     } else {
//       // Handle normal tRPC requests or return appropriate response
//       res.status(400).send('Invalid request');
//     }
//   }

//   wss.on('connection', (ws) => {
//     ws.on('message', async (message) => {
//         const data = JSON.parse(message.toString());
//         const ctx = await createTRPCContext({ req: null, res: null });
//         const result = await handleWebSocketMessage(data, ctx);
//         ws.send(JSON.stringify(result));
//     });
// });
// export type definition of API
export type AppRouter = typeof appRouter;

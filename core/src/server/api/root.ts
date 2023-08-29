import { wss } from "~/server/api/trpc";
import { IncomingMessage } from "http";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc"; // Adjust the import path as per your project structure
import { prisma } from "~/server/db"; // Adjust this import too
import { chatRouter } from "../Services/chatRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req: IncomingMessage, res: any) {
    if (req.method === 'GET' && req.headers.upgrade === 'websocket') {
      wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
        wss.emit('connection', ws, req);
      });
    } else {
      // Handle normal tRPC requests or return appropriate response
      res.status(400).send('Invalid request');
    }
  }

  wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
      const data = JSON.parse(message);
  
      // For this example, let's assume you have a procedure named 'handleMessage' in some router (like chatRouter).
      // You'd need to modify this to fit your actual structure.
      const result = await chatRouter
        .createProcedure('handleMessage')
        .resolve({ input: data, ctx: await createTRPCContext({ req: null, res: null }) });
  
      ws.send(JSON.stringify(result));
    });
  });
// export type definition of API
export type AppRouter = typeof appRouter;

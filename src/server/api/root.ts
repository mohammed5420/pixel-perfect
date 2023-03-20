import { createTRPCRouter } from "~/server/api/trpc";
import { pixelProjectRouter } from "~/server/api/routers/pixelRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  pixelProject: pixelProjectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

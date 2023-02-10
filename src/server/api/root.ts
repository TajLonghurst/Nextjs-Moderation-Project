import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { commentsRouter } from "./routers/comments";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  comments: commentsRouter,
});

export type AppRouter = typeof appRouter;

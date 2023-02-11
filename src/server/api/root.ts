import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { commentsRouter } from "./routers/comments";
import { adminNotificationsRouter } from "./routers/AdminNotifications";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  comments: commentsRouter,
  adminNotif: adminNotificationsRouter,
});

export type AppRouter = typeof appRouter;

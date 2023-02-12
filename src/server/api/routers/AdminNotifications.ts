import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";

export const adminNotificationsRouter = createTRPCRouter({
  readAdminNotif: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.commentModeration.findMany({
      select: {
        id: true,
        reason: true,
        status: true,
        createdAt: true,
        Comment: {
          select: {
            comment: true,
            User: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }),
});

import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const adminNotificationsRouter = createTRPCRouter({
  readAdminNotif: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.commentModeration.findMany({
      select: {
        id: true,
        reason: true,
        status: true,
        createdAt: true,
        Comment: {
          select: {
            id: true,
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
  removeAdminNotif: protectedProcedure
    .input(z.object({ adminNotifId: z.string(), postId: z.string().optional() }))
    .mutation(async ({ ctx, input }) => {
      return (
        await ctx.prisma.comment.delete({
          where: {
            id: input.postId,
          },
        }),
        await ctx.prisma.commentModeration.delete({
          where: {
            id: input.adminNotifId,
          },
        })
      );
    }),
});

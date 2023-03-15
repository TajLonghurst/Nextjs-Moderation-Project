import { z } from "zod";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const adminNotificationsRouter = createTRPCRouter({
  readAdminNotif: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.commentModeration.findMany({
      where: {
        Comment: {
          userId: ctx.session.user.id,
        },
      },
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
  passAdminNotif: protectedProcedure
    .input(z.object({ adminNotifId: z.string(), status: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.commentModeration.update({
        where: {
          id: input.adminNotifId,
        },
        data: {
          status: input.status,
        },
      });
    }),
});

// model Comment {
//     id            String              @id @default(cuid())
//     comment       String
//     createdAt     DateTime            @default(now())
//     updatedAt     DateTime            @updatedAt
//     User          User?               @relation(fields: [userId], references: [id])
//     userId        String?
//     commentStatus CommentModeration[]
// }

// model CommentModeration {
//     id        String   @id @default(cuid())
//     status    Boolean
//     reason    String[]
//     createdAt DateTime @default(now())
//     updatedAt DateTime @updatedAt
//     Comment   Comment? @relation(fields: [commentId], references: [id])
//     commentId String?  @unique
// }

// // Necessary for Next auth
// model User {
//     id                   String    @id @default(cuid())
//     name                 String?
//     email                String?   @unique
//     emailVerified        DateTime?
//     CustomProfilePicture String?
//     image                String?
//     accounts             Account[]
//     sessions             Session[]
//     comments             Comment[]
// }

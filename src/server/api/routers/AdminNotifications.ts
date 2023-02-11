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

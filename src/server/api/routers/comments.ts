import { boolean, z } from "zod";
import { OpenAIApi, Configuration } from "openai";
import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { env } from "../../../env/server.mjs";

const configuration = new Configuration({
  apiKey: env.CHATGPT_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const commentsRouter = createTRPCRouter({
  addComment: protectedProcedure
    .input(z.object({ comment: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const commentInput = input.comment;

      const response = await openai.createModeration({
        input: commentInput,
      });

      const result = response.data.results;
      const categories = result[0]?.categories;

      let filteredCategories;

      if (categories) {
        filteredCategories = Object.entries(categories)
          .filter(([key, value]) => value === true)
          .map(([key, value]) => ` ${key}`);
      }

      const createdComment = await ctx.prisma.comment.create({
        data: {
          comment: commentInput,
          userId: ctx.session.user.id,
        },
      });

      if (response.data.results[0] && response.data.results[0].flagged !== undefined) {
        await ctx.prisma.commentModeration.create({
          data: {
            status: response.data.results[0]?.flagged,
            reason: filteredCategories,
            commentId: createdComment.id,
          },
        });
      }
    }),
  readComments: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.comment.findMany({
      select: {
        User: true,
        comment: true,
        id: true,
        createdAt: true,
      },
    });
  }),
});

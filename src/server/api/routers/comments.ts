import { z } from "zod";
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

      const categoriesArry = [];

      if (categories) {
        for (const [reason, value] of Object.entries(categories)) {
          categoriesArry.push(`${reason}: ${value}`);
        }
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
            reason: categoriesArry,
            commentId: createdComment.id,
          },
        });
      }
    }),
});

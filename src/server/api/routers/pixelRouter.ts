import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const pixelProjectRouter = createTRPCRouter({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    const pixelProjects = await ctx.prisma.project.findMany({
      where: {
        user_id: ctx.session.user.id,
      },
    });

    return pixelProjects;
  }),
});

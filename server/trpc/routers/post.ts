import { z } from "zod"
import { publicProcedure, router } from "~/server/trpc/trpc"

export const postRouter = router({
  create: publicProcedure
    .input(z.object({ id: z.number().min(1), title: z.string() }))
    .mutation(async ({ input }) => {
      await useStorage("data").setItem(`post${input.id}`, input)
    }),

  get: publicProcedure
    .input(z.object({ id: z.number().min(1) }))
    .query(async ({ input }) => {
      return await useStorage("data").getItem(`post${input.id}`)
    }),

  delete: publicProcedure
    .input(z.object({ id: z.number().min(1) }))
    .query(async ({ input }) => {
      return await useStorage("data").removeItem(`post${input.id}`, { removeMeta: true })
    }),
})

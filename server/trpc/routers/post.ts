import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const postRouter = router({
  create: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input }) => {
      // ...
      console.log(input)
    }),

  list: publicProcedure.query(() => {
    // ...
    return []
  }),
})

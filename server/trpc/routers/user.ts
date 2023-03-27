import { publicProcedure, router } from '../trpc'

export const userRouter = router({
  list: publicProcedure.query(() => {
    return [{ id: 1, name: 'Naruto', age: 25 }]
  }),
})

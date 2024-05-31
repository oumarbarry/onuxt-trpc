import { publicProcedure, router } from "~/server/trpc/trpc"

export const userRouter = router({
  list: publicProcedure.query(() => {
    return [
      { id: 1, name: "Naruto", age: 25 },
      { id: 2, name: "Sasuke", age: 25 },
    ]
  }),
})

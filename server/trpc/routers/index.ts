import { userRouter } from "./user"
import { postRouter } from "./post"
import { router } from "~/server/trpc/trpc"

export const appRouter = router({
  user: userRouter,
  post: postRouter,
})

export type AppRouter = typeof appRouter

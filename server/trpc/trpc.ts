import { ZodError } from "zod"
import { initTRPC } from "@trpc/server"
import type { Context } from "./context"

const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: { ...shape.data, zodError: error.cause instanceof ZodError ? error.cause.flatten() : null },
    }
  },
})

/**
 * @see https://trpc.io/docs/server/routers
 */
export const router = t.router

/**
 * @see https://trpc.io/docs/server/procedures
 */
export const publicProcedure = t.procedure

/**
 * @see https://trpc.io/docs/server/middlewares
 */
// export const middleware = t.middleware

/**
 * @see https://trpc.io/docs/server/server-side-calls
 */
// export const createCallerFactory = t.createCallerFactory

/**
 * @see https://trpc.io/docs/server/merging-routers
 */
// export const mergeRouters = t.mergeRouters

import type { inferAsyncReturnType } from "@trpc/server"
import type { H3Event } from "h3"

/**
 * @link https://trpc.io/docs/context
 */
export async function createContext(event: H3Event) {
  console.log("ip", getRequestIP(event, { xForwardedFor: true }))

  return {}
}

export type Context = inferAsyncReturnType<typeof createContext>

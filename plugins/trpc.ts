import { loggerLink } from "@trpc/client"
import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client"
import type { AppRouter } from "~/server/trpc/routers"

export default defineNuxtPlugin(() => {
  const trpc = createTRPCNuxtClient<AppRouter>({
    links: [
      loggerLink({
        enabled: opts =>
          (import.meta.dev && typeof window !== "undefined")
          || (opts.direction === "down" && opts.result instanceof Error),
      }),

      httpBatchLink({ url: "/api/trpc" }),
    ],
  })

  return {
    provide: { trpc },
  }
})

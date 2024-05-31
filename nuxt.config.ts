export default defineNuxtConfig({
  devtools: { enabled: true },

  build: { transpile: ["trpc-nuxt"] },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
  ],

  eslint: { config: { standalone: false } },
})

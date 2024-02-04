// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css", "~/assets/css/global.css", "animate.css/animate.min.css"],
  modules: ["@nuxtjs/eslint-module", "nuxt-headlessui", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  eslint: {
    fix: process.env.LINT_FIX === "true",
    include: ["./components", "./layouts", "./plugins", "./utils", "./pages", "./stores", "./server/**/*.ts"],
    lintOnStart: process.env.LINT_ON_START === "true"
  }
});

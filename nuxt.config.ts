// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
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
  },

  app: {
    baseURL: process.env.DEPLOY_PRESET === "github-pages" ? process.env.DEPLOY_GITHUB_BASEURL : process.env.DEPLOY_BASEURL,
    buildAssetsDir: process.env.DEPLOY_PRESET === "github-pages" ? "assets" : "/_nuxt/"
  },
  nitro: {
    preset: process.env.DEPLOY_PRESET,
    esbuild: {
      options: {
        treeShaking: true,
        minify: true,
        target: "es2015",
        drop: ["console"]
      }
    },
    prerender: {
      // autoSubfolderIndex: process.env.DEPLOY_PRESET === "cloudflare-pages-static"
    }
  },

  runtimeConfig: {
    basePhotoURL: process.env.NUXT_CLOUDFLARE_PHOTO_BASE_URL
  }
});

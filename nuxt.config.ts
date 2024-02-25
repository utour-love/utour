// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/tailwind.css", "~/assets/css/global.css", "animate.css/animate.min.css"],
  modules: ["@nuxtjs/eslint-module", "nuxt-headlessui", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@vueuse/nuxt"],
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

<<<<<<< HEAD
   

  app: {
    baseURL: process.env.DEPLOY_BASEURL,
    buildAssetsDir: process.env.DEPLOY_BUILDASSETSDIR
=======
  app: {
    baseURL: process.env.DEPLOY_PRESET === "github-pages" ? process.env.DEPLOY_GITHUB_BASEURL : process.env.DEPLOY_BASEURL,
    buildAssetsDir: process.env.DEPLOY_PRESET === "github-pages" ? "assets" : "/_nuxt/"
>>>>>>> 714a38f7cb13dee4cbae7fa8ca48c67fe6d29525
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
      autoSubfolderIndex: process.env.DEPLOY_PRESET === "cloudflare-pages-static"
    }
  },
  vite: {
    build: {
      target: "es2015",
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      AUTHOR_NAME: process.env.AUTHOR_NAME,
      AUTHOR_EMAIL: process.env.AUTHOR_EMAIL,
      AUTHOR_ADDRESS: process.env.AUTHOR_ADDRESS,
      AUTHOR_QQ: process.env.AUTHOR_QQ,
      AUTHOR_WEIXIN: process.env.AUTHOR_WEIXIN
    }
  }
});

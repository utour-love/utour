import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";
import type { Config } from "tailwindcss";

export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    extend: {
      colors: {
        primary: "#00095e",
        secondary: "#e3b200"
      }
    },
    fontFamily: {
      primary: ["Microsoft YaHei", "Noto Sans SC", "sans-serif"]
    },
    screens: {
      sm: "640px",
      md: { max: "854px" },
      mi: { max: "500px" },
      lg: "855px",
      xl: "1280px",
      "2xl": "1536px"
    },

    keyframes: {
      carmove: {
        "0%, 100%": { transform: "translateX(-2vw)" },
        "20%": { transform: "translateX(5vw)" },
        "40%": { transform: "translateX(15vw)" },
        "60%": { transform: "translateX(10vw)" },
        "80%": { transform: "translateX(5vw)" }
      }
    }
  },
  daisyui: {
    themes: false
  },
  plugins: [
    require("daisyui"),
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all individual icon packages you have installed
      // If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
      collections: getIconCollections(["heroicons-solid"])
      // If you want to use all icons from @iconify/json, you can do this:
      // collections: getIconCollections("all"),
      // and the more recommended way is to use `dynamicIconsPlugin`, see below.
    })
  ]
} satisfies Config;

import { defineStore } from "pinia";

/**
 * @description 代表一个用于管理应用程序主题的商店。
 */
export const useMyThemeStore = defineStore(
  "myThemeStore",
  () => {
    /**
     * @description 应用程序的当前主题，相当于state。
     */
    const theme: Ref<"light" | "dark" | undefined> = ref("light");

    /**
     * @description 获取应用程序的当前主题,相当于getter。
     */
    const getTheme = computed(() => theme.value);

    /**
     * @description 更改应用程序的主题，相当于mutation。
     */
    function changeTheme() {
      switch (theme.value) {
        case "light":
          theme.value = "dark";
          break;
        case "dark":
          theme.value = "light";
          break;
        default:
          theme.value = "light";
          break;
      }
    }

    return { getTheme, changeTheme, theme };
  },
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
);

import { defineStore } from "pinia";

/**
 * @description 代表一个用于管理应用程序主题的商店。
 */
export const useMyUserDecisionStore = defineStore(
  "myUserDecisionStore",
  () => {
    /**
     * @description 应用程序的初始值,相当于state。
     */
    const theme: Ref<"light" | "dark" | undefined> = ref("light");
    const adDetection: Ref<boolean> = ref(true);

    /**
     * @description  获取计算的值,相当于getter。
     */
    const getTheme = computed(() => theme.value);
    const getAdDetection = computed(() => adDetection.value);

    /**
     * @description 更改值，相当于mutation。
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
    function changeAdDetection() {
      adDetection.value = false;
    }

    return { getTheme, changeTheme, theme, getAdDetection, changeAdDetection, adDetection };
  },
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
);

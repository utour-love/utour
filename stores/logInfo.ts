import { defineStore } from "pinia";
import { computed, ref } from "vue";

/**
 * @description 代表一个用于管理登录信息的存储。
 */
export const useMyLogInfoStore = defineStore("myLogInfoStore", () => {
  /**
   * @description 代表登录状态,相当于state。
   */
  const loginStatus = ref(false);

  /**
   * @description 获取计算的登录状态,相当于getter。
   */
  const getLoginStatus = computed(() => loginStatus.value);

  /**
   * @description 更改登录状态。
   * @param status -新的登录状态
   * @description 该函数相当于mutation。
   */
  function changeLoginStatus(status: boolean) {
    loginStatus.value = status;
  }

    return { getLoginStatus, changeLoginStatus, loginStatus };
  },
  {
    persist: {
      storage: persistedState.localStorage
    }
  }
);

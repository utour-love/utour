<template>
  <ClientOnly>
    <div
      v-if="userDecisionStore.getAdDetection"
      class="animate__animated z-50 cursor-help fixed right-0 top-24 w-80 h-auto text-xs leading-normal flex flex-col gap-4"
      :class="{ animate__bounceOutRight: !AdblockTip, animate__bounceInRight: AdblockTip }"
    >
      <div class="bg-yellow-100 border-l-4 border-yellow-400 rounded p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400">
              <path
                clip-rule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div class="ml-3 text-yellow-700">
            <p class="text-base">
              浏览器的广告拦截器可能会造成页面元素缺失，为了更好的体验，请
              <strong class="font-medium text-yellow-700 underline underline-offset-4" href="#">关闭广告拦截器。</strong>
            </p>
          </div>

          <div class="w-5 h-5 cursor-pointer" @click="userDecision">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20">
              <path
                fill="#393a37"
                d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
const AdblockTip = useState("AdblockTip", () => true);
const userDecisionStore = useMyUserDecisionStore();

function userDecision() {
  userDecisionStore.changeAdDetection;
  AdblockTip.value = false;
}
</script>

<style></style>

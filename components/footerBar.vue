<template>
  <div class="wave pt-5 relative">
    <footer
      class="bg-[#182f4a] bg-[url('@/assets/svg/cloud.svg')] will-change-transform w-full bg-top bg-no-repeat bg-cover text-center pt-[15vh] px-10 text-gray-200"
    >
      <div class="footer_content box-border grid lg:grid-cols-3 grid-rows-1" style="">
        <div class="sc1 prose">
          <img src="https://i.imgtg.com/2023/07/28/OiZint.webp" alt="TraLive icon" class="w-[165px] h-[57px] mb-5" />
          <p class="text-left text-gray-200 md:line-clamp-3 md:mb-[5vw]">
            当您探索我的网站的每一个角落，感受到它所带给您的方便和快乐时，我深知这正是我不断前行的源动力。您的使用与浏览就是对我的肯定，我会不断完善和改进，让它变得越来越好。
          </p>
          <ClientOnly>
            <div class="footer-social flex gap-8 lg:mt-5 md:mb-[5vw]">
              <section class="flex justify-center items-center">
                <button
                  @click="open1 = true"
                  class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#17a549] from-gray-800 to-black text-white font-semibold hover:translate-y-1 hover:rounded-[50%] transition-all duration-300 hover:from-[#331029] hover:to-[#310413]"
                >
                  <TransitionRoot as="div" :show="open1">
                    <Dialog as="div" class="relative z-10" @close="open1 = false">
                      <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                      >
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </TransitionChild>

                      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <TransitionChild
                            as="template"
                            enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <DialogPanel
                              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                            >
                              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                  <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#17a549] sm:mx-0 sm:h-10 sm:w-10"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-5 w-5">
                                      <path
                                        d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32C100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6l68-34.1c24.4 4.8 43.8 9.7 68.2 9.7c6.2 0 12.1-.3 18.3-.8c-4-12.9-6.2-26.6-6.2-40.8c-.1-84.9 72.9-154 165.3-154m-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4c0 14.5-9.7 24.2-24.2 24.2c-14.8 0-29.3-9.7-29.3-24.2c.1-14.7 14.6-24.4 29.3-24.4m-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2c0-14.8 14.8-24.4 29.3-24.4c14.8 0 24.4 9.7 24.4 24.4c0 14.6-9.6 24.2-24.4 24.2M563 319.4c0-77.9-77.9-141.3-165.4-141.3c-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3l-14.8-48.6C534 402.1 563 363.2 563 319.4m-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.8 0 24.4 9.7 24.4 19.3c0 10-9.7 19.6-24.4 19.6m107.1 0c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.5 0 24.4 9.7 24.4 19.3c.1 10-9.9 19.6-24.4 19.6"
                                      />
                                    </svg>
                                  </div>
                                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" class="text-sm font-semibold leading-6 text-gray-500"
                                      >通过微信联系我，我将帮助您解决问题。</DialogTitle
                                    >
                                    <div class="mt-2">
                                      <p class="text-base text-gray-900">{{ weixin }}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                  type="button"
                                  class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                  @click="copyContact(weixin)"
                                >
                                  {{ copied ? "已复制" : "复制" }}
                                </button>
                                <button
                                  type="button"
                                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                  @click="open1 = false"
                                  ref="cancelButtonRef"
                                >
                                  关闭
                                </button>
                              </div>
                            </DialogPanel>
                          </TransitionChild>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-5 w-5">
                    <path
                      d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32C100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6l68-34.1c24.4 4.8 43.8 9.7 68.2 9.7c6.2 0 12.1-.3 18.3-.8c-4-12.9-6.2-26.6-6.2-40.8c-.1-84.9 72.9-154 165.3-154m-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4c0 14.5-9.7 24.2-24.2 24.2c-14.8 0-29.3-9.7-29.3-24.2c.1-14.7 14.6-24.4 29.3-24.4m-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2c0-14.8 14.8-24.4 29.3-24.4c14.8 0 24.4 9.7 24.4 24.4c0 14.6-9.6 24.2-24.4 24.2M563 319.4c0-77.9-77.9-141.3-165.4-141.3c-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3l-14.8-48.6C534 402.1 563 363.2 563 319.4m-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.8 0 24.4 9.7 24.4 19.3c0 10-9.7 19.6-24.4 19.6m107.1 0c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.5 0 24.4 9.7 24.4 19.3c.1 10-9.9 19.6-24.4 19.6"
                    />
                  </svg>
                </button>
              </section>

              <section class="flex justify-center items-center">
                <button
                  @click="open2 = true"
                  class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-1 hover:rounded-[50%] transition-all duration-300 hover:from-[#331029] hover:to-[#310413]"
                >
                  <TransitionRoot as="div" :show="open2">
                    <Dialog as="div" class="relative z-10" @close="open2 = false">
                      <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                      >
                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </TransitionChild>

                      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          <TransitionChild
                            as="template"
                            enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enter-to="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 sm:scale-100"
                            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                          >
                            <DialogPanel
                              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                            >
                              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="sm:flex sm:items-start">
                                  <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0077b5] sm:mx-0 sm:h-10 sm:w-10"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1em"
                                      height="1.1em"
                                      viewBox="0 0 20 20"
                                      stroke-width="0"
                                      fill="white"
                                      stroke="currentColor"
                                      class="w-5 h-5"
                                    >
                                      <path
                                        d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m4.008 11.92c-.184.096-.47-.122-.737-.52c-.105.435-.369.828-.743 1.144c.394.144.65.38.65.65c0 .442-.695.799-1.553.799c-.773 0-1.415-.291-1.533-.672h-.184c-.12.38-.76.672-1.533.672c-.857 0-1.552-.357-1.552-.8c0-.268.256-.505.65-.65c-.375-.315-.638-.708-.745-1.143c-.267.398-.553.616-.735.52c-.265-.136-.213-.88.117-1.654c.26-.61.612-1.06.879-1.158a1.18 1.18 0 0 1 .172-.748l-.002-.041c0-.11.026-.21.07-.298c.068-1.586 1.1-2.845 2.771-2.845c1.67 0 2.703 1.259 2.771 2.845c.044.088.07.188.07.298c0 .012 0 .027-.003.041a1.169 1.169 0 0 1 .173.748c.267.098.62.547.878 1.158c.331.775.383 1.518.119 1.655z"
                                      />
                                    </svg>
                                  </div>
                                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" class="text-sm font-semibold leading-6 text-gray-500"
                                      >通过QQ联系我，我将帮助您解决问题。</DialogTitle
                                    >
                                    <div class="mt-2">
                                      <p class="text-base text-gray-900">{{ qq }}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                  type="button"
                                  class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                  @click="copyContact(qq)"
                                >
                                  {{ copied ? "已复制" : "复制" }}
                                </button>
                                <button
                                  type="button"
                                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                  @click="open2 = false"
                                  ref="cancelButtonRef"
                                >
                                  关闭
                                </button>
                              </div>
                            </DialogPanel>
                          </TransitionChild>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1.1em"
                    viewBox="0 0 20 20"
                    stroke-width="0"
                    fill="currentColor"
                    stroke="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m4.008 11.92c-.184.096-.47-.122-.737-.52c-.105.435-.369.828-.743 1.144c.394.144.65.38.65.65c0 .442-.695.799-1.553.799c-.773 0-1.415-.291-1.533-.672h-.184c-.12.38-.76.672-1.533.672c-.857 0-1.552-.357-1.552-.8c0-.268.256-.505.65-.65c-.375-.315-.638-.708-.745-1.143c-.267.398-.553.616-.735.52c-.265-.136-.213-.88.117-1.654c.26-.61.612-1.06.879-1.158a1.18 1.18 0 0 1 .172-.748l-.002-.041c0-.11.026-.21.07-.298c.068-1.586 1.1-2.845 2.771-2.845c1.67 0 2.703 1.259 2.771 2.845c.044.088.07.188.07.298c0 .012 0 .027-.003.041a1.169 1.169 0 0 1 .173.748c.267.098.62.547.878 1.158c.331.775.383 1.518.119 1.655z"
                    />
                  </svg>
                </button>
              </section>

              <section class="flex justify-center items-center">
                <a href="https://github.com" target="_blank" rel="noopener">
                  <button
                    class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-1 hover:rounded-[50%] transition-all duration-300 hover:from-[#331029] hover:to-[#310413]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 15" class="w-5">
                      <path
                        fill="currentColor"
                        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                      ></path>
                    </svg>
                  </button>
                </a>
              </section>

              <div class="tooltip tooltip-bottom" data-tip="敬请期待!">
                <span class="sr-only">敬请期待！</span>
                <a href="javascript:void(0)" class="more hover:cursor-not-allowed">
                  <span class="i-fa6-solid-ellipsis h-7 w-7"> </span>
                </a>
              </div>
            </div>
          </ClientOnly>
        </div>

        <div class="menu gap-6 text-base lg:text-center text-left">
          <span class="footer-title">导航</span>
          <span>
            <!-- <router-link :to="{ name: 'Home' }"> 主页 </router-link> -->
            <NuxtLink to="/" class="hover:text-secondary/90 transition-colors duration-75">主页</NuxtLink>
          </span>
          <span>
            <!-- <router-link :to="{ name: '' }"> 活动 </router-link> -->
            <NuxtLink to="/" class="hover:text-secondary/90 transition-colors duration-75">活动</NuxtLink>
          </span>
          <span>
            <!-- <router-link :to="{ name: '' }"> 公告 </router-link> -->
            <NuxtLink to="/" class="hover:text-secondary/90 transition-colors duration-75">公告</NuxtLink>
          </span>

          <span>
            <!-- <a @click="enterBlog()" style="cursor: pointer">博客</a> -->
            <NuxtLink to="/" class="hover:text-secondary/90 transition-colors duration-75">博客</NuxtLink>
          </span>
          <span class="mb-16">
            <!-- <router-link :to="{ path: '/contact' }"> 联系我们 </router-link> -->
            <NuxtLink to="/" class="hover:text-secondary/90 transition-colors duration-75">联系我们</NuxtLink>
          </span>
        </div>

        <div class="gap-10 menu text-base text-left lg:text-center md:mb-6">
          <h2 class="footer-title">联系方式</h2>
          <p>{{ address }}</p>
          <p>{{ mail }}</p>
          <p>(+86)-1234567890</p>
        </div>
      </div>
    </footer>

    <div class="divider relative h-[1px] m-0 bg-white"></div>
    <p class="copyright relative text-center text-sm text-gray-300 bg-[#182f4a] p-5">
      <strong
        >© {{ year }} All Rights Reserved. Designed by <em style="color: aliceblue">{{ author }}</em></strong
      >
    </p>
  </div>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from "@headlessui/vue";
import { useClipboard } from "@vueuse/core";

const year = new Date().getFullYear();
const config = useRuntimeConfig();
const open1 = ref(false);
const open2 = ref(false);
const mail = config.public.AUTHOR_EMAIL ?? "保密";
const address = config.public.AUTHOR_ADDRESS ?? "保密";
const author = config.public.AUTHOR_NAME ?? "佚名";
const qq = config.public.AUTHOR_QQ ?? "保密";
const weixin = config.public.AUTHOR_WEIXIN ?? "保密";

const source = ref("");
const { copy, copied, isSupported } = useClipboard({ source });

function copyContact(content: string) {
  source.value = content;
  if (isSupported.value) {
    copy();
  } else {
    alert("您的浏览器不支持复制功能！");
  }
}
</script>

<style>
@import "../assets/css/wave.css";
</style>

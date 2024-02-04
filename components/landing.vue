<template>
  <!-- <div class="z-50 px-4 py-16 mx-auto sm:max-w-fit md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8 items-center">
      <h2 class="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none md:mb-6 group">
        <span class="inline-block sm:mb-4 tracking-wider text-xl md:text-base dark:text-slate-400"> 最近发布的图片 </span>
        <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
      </h2>

      <div class="stats shadow-lg border lg:w-auto dark:bg-slate-700 lg:h-24">
        <div class="stat">
          <div class="stat-title w-20">
            综合得分：
            <ClientOnly>
              <span ref="real_score" class="stat-value text-xl animate__animated animate__fadeInDown">{{ rankData }}</span>
              <template #fallback>
                <span ref="fake_score" class="animate__animated animate__fadeInUp">加载中...</span>
              </template>
            </ClientOnly>
          </div>

          <div class="flex gap-x-1 w-28 mt-3">
            <ClientOnly>
              <span
                ref="real_star"
                class="i-heroicons-solid-star h-5 w-5 flex-none animate__animated animate__fadeInDown text-secondary"
                aria-hidden="true"
                :key="score"
                v-for="score in rankData"
                @vue:mounted="rankDataload(fake_star!, real_star!)"
              ></span>
              <template #fallback>
                <span
                  ref="fake_star"
                  :key="i"
                  class="i-heroicons-solid-star h-5 w-5 flex-none mt-1 text-gray-300 animate__animated animate__fadeInUp"
                  aria-hidden="true"
                  v-for="i in 5"
                ></span>
              </template>
            </ClientOnly>
          </div>
          <div class="lg:stat-figure stat-desc lg:mt-10 mt-5 w-20">
            当前排名:
            <ClientOnly>
              <strong ref="real_ratio" class="animate__animated animate__fadeInDown">前{{ rankRatio }}</strong>
              <template #fallback>
                <strong ref="fake_ration" class="animate__animated animate__fadeInUp">.......</strong>
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6  ">
      <a href="/" aria-label="View Item" v-for="item in lists" :key="item.name" class="pointer-events-none">
        <div class="ImgContainer relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img :ref="item.name" :data-idx="item.idx" fetchpriority="high" class="object-cover w-full h-56 md:h-64 xl:h-80" :src="item.imgUrl" />
          <div
            :class="item.name"
            class="mask absolute flex place-content-center place-items-center inset-0 px-6 py-4 transition-opacity duration-300 bg-black bg-opacity-75 animate__animated"
          >
            <span class="loading bg-white bg-opacity-100 loading-infinity loading-lg"></span>
          </div>
        </div>
      </a>
    </div>

    <div class="text-center">
      <NuxtLink to="/">
        <span
          class="inline-flex items-center font-semibold transition-colors duration-200 text-slate-800 hover:text-slate-500 underline-offset-8 underline decoration-2 dark:text-slate-400 dark:hover:text-slate-100"
          >看看照片墙？
          <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
          </svg>
        </span>
      </NuxtLink>
    </div>
  </div> -->
  <div class="z-50 px-4 py-16 mx-auto sm:max-w-fit md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 class="max-w-lg text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none md:mb-6 group">
        <span class="inline-block sm:mb-4 tracking-wider text-xl md:text-base dark:text-slate-400"> 最近发布的图片 </span>
        <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
      </h2>

      <div class="stats justify-center shadow-lg border lg:w-auto dark:bg-slate-700 lg:h-24">
        <div class="stat">
          <div class="stat-title w-20">
            综合得分：
            <ClientOnly>
              <span ref="real_score" class="stat-value text-xl animate__animated animate__fadeInDown">{{ rankData }}</span>
              <template #fallback>
                <span ref="fake_score" class="animate__animated animate__fadeInUp">加载中...</span>
              </template>
            </ClientOnly>
          </div>

          <div class="flex gap-x-1 w-28 mt-3">
            <ClientOnly>
              <span
                :key="score"
                ref="real_star"
                class="h-5 w-5 i-heroicons-solid-star flex-none text-secondary animate__animated animate__fadeInDown"
                aria-hidden="true"
                v-for="score in rankData"
                @vue:mounted="rankDataload(fake_star!, real_star!)"
              ></span>
              <template #fallback>
                <span
                  :key="score"
                  ref="fake_star"
                  aria-hidden="true"
                  v-for="score in 5"
                  class="i-heroicons-solid-star h-5 w-5 mt-1 text-gray-300 flex-none animate__animated animate__fadeInUp"
                ></span>
              </template>
            </ClientOnly>
          </div>
          <div class="lg:stat-figure stat-desc lg:mt-10 mt-5 w-20">
            当前排名:
            <ClientOnly>
              <strong ref="real_ratio" class="animate__animated animate__fadeInDown">前{{ rankRatio }}</strong>
              <template #fallback>
                <strong ref="fake_ration" class="animate__animated animate__fadeInUp">.......</strong>
              </template>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
      <a href="/" aria-label="View Item" v-for="item in lists" :key="item.name" class="pointer-events-none">
        <div class="ImgContainer relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
          <img :ref="item.name" :data-idx="item.idx" fetchpriority="high" class="object-cover w-full h-56 md:h-64 xl:h-80" :src="item.imgUrl" />
          <div
            :class="item.name"
            class="mask absolute flex place-content-center place-items-center inset-0 px-6 py-4 transition-opacity duration-300 bg-black bg-opacity-75 animate__animated"
          >
            <span class="loading bg-white bg-opacity-100 loading-infinity loading-lg"></span>
          </div>
        </div>
      </a>
    </div>

    <div class="text-center"></div>
  </div>
</template>

<script setup lang="ts">
import type picInfo from "@/components/interface/picInfo";
import imagesloaded from "imagesloaded";

let rankData = getRandom(1, 5);
let rankRatio = getRation();

let real_star = ref<HTMLElement>();
let fake_star = ref<HTMLElement>();

const rankDataload = (fake_ele: HTMLElement, real_ele: HTMLElement) => {
  fake_ele.classList.remove("animate__fadeOutUp");
  real_ele.classList.remove("animate__fadeInDown");
  real_ele.classList.add("animate__fadeInDown");
  fake_ele.classList.add("animate__fadeOutUp");
};

const lists: picInfo[] = [
  {
    imgUrl: "https://source.unsplash.com/1240x874/?thailand,beach,sig=168&auto=compress&fm=webp",
    name: "thailandBeach",
    idx: 1
  },
  {
    imgUrl: "https://source.unsplash.com/1240x874/?japan,nature,sig=82&auto=compress&fm=webp",
    name: "JapanNature",
    idx: 2
  },
  {
    imgUrl: "https://source.unsplash.com/1240x874/?china,city,sig=124&auto=compress&fm=webp",
    name: "chinaCity",
    idx: 3
  },
  {
    imgUrl: "https://source.unsplash.com/1240x874/?france,nature,sig=139&auto=compress&fm=webp",
    name: "france",
    idx: 4
  }
];

onMounted(() => {
  let ImgContainer = document.getElementsByClassName("ImgContainer");
  let mask = document.getElementsByClassName("mask");
  // @ts-expect-error 调用签名
  let detectLoad = imagesloaded(ImgContainer);
  let brokenImages = [] as HTMLImageElement[];
  detectLoad
    .on("progress", function (instance: any, image: any) {
      image.isLoaded && mask[image.img.attributes[0].nodeValue - 1].classList.add("animate__fadeOut");
      image.isLoaded && image.img.parentElement?.parentElement.classList.remove("pointer-events-none");
      image.isLoaded === false && brokenImages.push(image) && ((image.img as HTMLImageElement).src = "https://i.imgtg.com/2023/07/28/OiKjiG.webp");
    })
    .on("fail", () => {
      brokenImages.forEach(val => {
        // @ts-expect-error don't exist the type 'img' but can be used
        mask[val.img.attributes[0].nodeValue - 1].classList.add("animate__fadeOut");
      });
    })
    .on("done", () => {
      for (let index = 0; index < mask.length; index++) {
        mask[index].classList.add("animate__fadeOut");
      }
    });
});
</script>

<template>
  <NuxtLayout name="default">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<script lang="ts" setup>


useHead({
  title: "utour",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Home page"
    }
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }
  ]
});
</script>

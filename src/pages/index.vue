<script setup lang="ts">
import TheHero from "@/components/TheHero.vue";
import TheTopPageAbout from "@/components/TheTopPageAbout.vue";
import TheTopPageInfos from "@/components/TheTopPageInfos.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: 'SZPP - 静岡大学プログラミングサークル'
})
</script>

<template>
  <TheHero />
  <TheTopPageAbout />
  <TheTopPageInfos />
</template>

<style scoped lang="scss">
</style>

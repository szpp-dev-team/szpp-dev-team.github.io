<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
import TheHero from "@/components/TheHero.vue";
import TheTopPageAbout from "@/components/TheTopPageAbout.vue";
import TheTopPageInfos from "@/components/TheTopPageInfos.vue";
</script>

<template>
  <PageHeader />
  <main>
    <TheHero />
    <TheTopPageAbout />
    <TheTopPageInfos />
  </main>
  <PageFooter />
</template>

<style scoped lang="scss">

</style>

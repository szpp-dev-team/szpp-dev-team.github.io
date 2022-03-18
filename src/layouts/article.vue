<script setup lang="ts">
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
import { useHead } from '@vueuse/head';
import { useRoute } from 'vue-router';

const r = useRoute();

useHead({
  title: r.meta.title ? (r.meta.title + ' | 静岡大学プログラミングサークルSZPP') : '!!タイトル未設定!!'
})
</script>

<template>
  <PageHeader />
  <main class="main">
    <router-view />
  </main>
  <PageFooter />
</template>

<style scoped lang="scss">
.main {
  min-height: calc(100vh - 60px);
  padding: 0 16px;
  background-color: #f0f9ff;
}
</style>

<style>
.markdown-wrapper {
  background-color: #fff;
}
</style>

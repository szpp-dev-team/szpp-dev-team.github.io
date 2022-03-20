<script setup lang="ts">
import { useHead } from '@vueuse/head';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();

const pageTitle = computed(() => {
  const rawTitle = currentRoute.meta.title as string | undefined;
  if (rawTitle == null) {
    console.warn('title is undefined: path:', currentRoute.path);
    return 'undefined';
  }
  if (rawTitle === 'default') {
    return 'SZPP - 静岡大学プログラミングサークル';
  }
  return rawTitle + ' | SZPP - 静岡大学プログラミングサークル';
});

// computed にしないと SPA でページ遷移したときに meta タグが変化しない
const pageDescription = computed(() => {
  return currentRoute.meta.description;
});

useHead({
  title: pageTitle,
  meta: [
    {
      name: 'description',
      content: pageDescription,
    },
  ],
});
</script>

<template>
  <router-view />
</template>

<route lang="yaml">
meta:
  title: お知らせ一覧
</route>

<script setup lang="ts">
import ArticleCardGrid from '@/components/ArticleCardGrid.vue';
import PageSet from '@/modules/PageSet';
import { useHead } from '@vueuse/head';

const news = PageSet.news();
useHead({
  meta: [
    {
      name: 'description',
      content: 'SZPP のお知らせ一覧: ' + news.map(e => (e.meta.title ?? '') as string).join(' / ')
    }
  ]
});
</script>

<template>
  <section>
    <div class="container">
      <h1 class="top-header">お知らせ</h1>
      <p class="page-description">イベントの告知や活動情報に関する投稿の一覧です。</p>
    </div>
    <ArticleCardGrid :routes="news" />
  </section>
</template>

<style scoped lang="scss">
.top-header {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.page-description {
  margin: 1rem 0 2rem;
}
</style>

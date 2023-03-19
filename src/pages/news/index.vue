<route lang="yaml">
meta:
  title: お知らせ一覧
</route>

<script setup lang="ts">
import ArticleListPage from '@/components/ArticleListPage.vue';
import PageSet from '@/modules/PageSet';

const news = PageSet.news();
</script>

<template>
  <ArticleListPage :articles="news" />
</template>

<style scoped lang="scss">
</style>

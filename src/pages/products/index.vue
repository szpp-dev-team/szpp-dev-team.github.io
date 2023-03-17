<route lang="yaml">
meta:
  title: 製作物一覧
</route>

<script setup lang="ts">
import { useHead } from '@vueuse/head';
import PageSet from '@/modules/PageSet';
import PostList from '@/components/PostList.vue';

const products = PageSet.products();
useHead({
  meta: [
    {
      name: 'discription',
      content: 'SZPPの製作物一覧'
    }
  ]
});
</script>

<template>
  <section class="container">
    <h1 class="top-header">製作物一覧</h1>
    <p class="page-description">これまでの製作物の一覧です。</p>
    <PostList :routes="products"/>
  </section>
</template>

<style scoped lang="scss">
.top-header{
  font-size: 2rem;
  margin-bottom: 1rem;
}
.page-description{
  margin: 1rem 0 2rem;
}
</style>
<route lang="yaml">
meta:
  title: 制作物一覧
</route>

<script setup lang="ts">
import ArticleListPage from "@/components/ArticleListPage.vue";
import PageSet from "@/modules/PageSet";

const products = PageSet.products();
</script>

<template>
  <ArticleListPage :articles="products" />
</template>

<style scoped lang="scss"></style>

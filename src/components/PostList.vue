<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router';
import Date from '@/components/Date.vue'

defineProps<{
  routes: RouteRecordRaw[],
}>();
</script>

<template>
  <ul class="posts">
    <li v-for="(r, i) in routes" :key="i" class="posts__item">
      <RouterLink class="posts__item-link" :to="r.path">
        <Date :yyyy-mm-dd="String(r.meta?.postedAt)" prefix="投稿: " icon="calendar" />
        <div class="posts__title">{{ r.meta?.title }}</div>
        <p class="posts__description">{{ r.meta?.description }}</p>
        <div class="posts__detail-link-wrapper">
          <span class="posts__detail-link">詳しく見る</span>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.posts {
  margin: 0;
  padding: 0;
  list-style: none;

  &__item {
    border-bottom: 1px solid var(--c-primary-main);
  }
  &__item:first-child {
    border-top: 1px solid var(--c-primary-main);
  }

  &__item-link {
    display: block;
    padding: 1rem;

    &:hover {
      background-color: #f6fcff;
    }
  }

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--c-primary-dark);
    margin: 0.5rem 0;
  }

  &__detail-link-wrapper {
    text-align: right;
    margin-top: .5rem;
  }
  &__detail-link {
    color: var(--c-primary-dark);

    &::before {
      content: ">>";
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

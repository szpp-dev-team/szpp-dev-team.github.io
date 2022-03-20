<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router';

defineProps<{
  routes: RouteRecordRaw[],
}>();
</script>

<template>
  <ul class="events">
    <li v-for="r in routes" class="events__item">
      <RouterLink class="events__item-link" :to="r.path">
        <div class="events__posted-at">
          <i class="fa-solid fa-calendar"></i>
          <span>Post:&nbsp;</span>
          <time :datetime="String(r.meta?.postedAt)">{{ r.meta?.postedAt }}</time>
        </div>
        <div class="events__title">{{ r.meta?.title }}</div>
        <p class="events__description">{{ r.meta?.description }}</p>
        <div class="events__detail-link-wrapper">
          <span class="events__detail-link">詳しく見る</span>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.events {
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

  &__posted-at {
    color: var(--c-secondary);
    display: flex;
    align-items: center;

    > i {
      margin-right: .25rem;
    }
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

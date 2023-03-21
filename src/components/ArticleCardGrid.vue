<script setup lang="ts">
import Date from "@/components/Date.vue";
import config from "@/config";
import { ArticleRouteRecord } from "@/models/RouteMetas";

defineProps<{
  articles: ArticleRouteRecord[];
}>();
</script>

<template>
  <ul class="articles">
    <li v-for="r in articles" :key="r.path" class="card">
      <RouterLink class="card__eyecatch-wrapper" :to="r.path">
        <img
          class="card__eyecatch"
          :src="r.meta.eyecatch ?? config.eyecatchFallbackImage"
          :alt="`「${r.meta.title}」のアイキャッチ画像`"
        />
      </RouterLink>
      <div class="card__overlay">
        <Date
          class="card__overlay__date"
          :yyyy-mm-dd="String(r.meta?.postedAt)"
          prefix="投稿: "
          icon="calendar"
        />
        <RouterLink
          :to="r.path"
          class="card__overlay__title --hover-underline"
          >{{ r.meta?.title }}</RouterLink
        >
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import "@/styles/_breakpoint.scss";

$gap: 4px;

.articles {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  gap: $gap;
}

.card {
  position: relative;
  width: 100%;
  height: 20em;
  filter: drop-shadow(0 1px 4px rgba(0 0 0 / 40%));
  transition: filter 0.3s;

  @include mediaquery(md) {
    width: calc(50% - $gap);
  }

  @include mediaquery(lg) {
    width: calc(33.333% - $gap);
  }

  @include mediaquery(xl) {
    width: calc(25% - 2 * $gap);
  }

  &__eyecatch-wrapper {
    display: block;
    height: 100%;
  }

  &__eyecatch {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0 51 126 / 60%);
    color: #fff;
    padding: 1rem;
    transition: 0.2s;

    &__date {
      color: #eee;
      font-size: 0.9rem;
    }

    &__title {
      color: #fff;
      font-size: 1.25rem;
      font-weight: 500;
      margin-top: 0.1rem;
    }
  }
  &:hover {
    filter: drop-shadow(0 4px 8px rgba(0 0 0 / 50%));
    z-index: 10;
  }
  &:hover > &__overlay {
    padding: 1.5rem 1rem;
  }
}
</style>

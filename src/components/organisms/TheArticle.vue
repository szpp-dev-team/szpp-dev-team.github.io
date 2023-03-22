<script setup lang="ts">
import DateText from "@/components/atoms/DateText.vue";
import FlexBox from "@/components/atoms/FlexBox.vue";
import config from "@/config";
import { ArticleRouteMeta } from "@/models/RouteMetas";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const meta = computed(() => route.meta as ArticleRouteMeta);
const eyecatchImage = computed(
  () => meta.value.eyecatch ?? config.eyecatchFallbackImage
);

const category = computed(() => {
  const c = config.categories.find(({ pathPrefix }) =>
    route.path.startsWith(pathPrefix)
  );
  if (c == null) return null;
  return {
    link: c.pathPrefix,
    name: c.name,
  };
});
</script>

<template>
  <section class="main-section">
    <header>
      <div class="eyecatch">
        <img
          :src="eyecatchImage"
          alt="eyecatch image"
          class="eyecatch__image"
        />
        <div class="eyecatch__overlay">
          <h1 class="eyecatch__title">{{ $route.meta.title }}</h1>
          <FlexBox
            class="eyecatch__detail"
            wrap="wrap"
            justify="center"
            col-gap="1.5rem"
            row-gap="0.5rem"
          >
            <DateText
              v-if="$route.meta.postedAt"
              prefix="投稿: "
              :yyyy-mm-dd="String($route.meta.postedAt)"
              icon="calendar"
              class="article-date"
            />
            <DateText
              v-if="$route.meta.lastUpdatedAt"
              prefix="更新: "
              :yyyy-mm-dd="String($route.meta.lastUpdatedAt)"
              icon="pen"
              class="article-date"
            />
            <RouterLink
              v-if="category != null"
              :to="category.link"
              class="badge"
            >
              #{{ category.name }}
            </RouterLink>
          </FlexBox>
        </div>
      </div>
    </header>
    <article>
      <slot />
    </article>
  </section>
</template>

<style lang="scss">
@import "@/styles/_breakpoint.scss";

.eyecatch {
  position: relative;
  margin: 0;

  &__image {
    width: 100%;
    aspect-ratio: 16 / 7;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1.5rem 1.25rem;
    background: rgb(0 51 126 / 60%);
    color: #fff;
  }

  &__title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.2;

    @include mediaquery(sm) {
      font-size: 1.5rem !important;
    }
  }

  &__detail {
    font-size: 0.9rem;

    &:not(:empty) {
      margin-top: 0.75rem;
    }
  }
}

.main-section {
  background-color: #fff;
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
  max-width: 980px;
  margin: 0 auto;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  > article {
    padding: 2rem 5rem 5rem;

    @media screen and (max-width: 768px) {
      & {
        padding: 2rem 1.5rem 5rem;
      }
    }
  }
}

.badge {
  display: inline-block;
  border: 1px solid #fff;
  border-radius: 0.25em;
  color: #fff;
  padding: 0.1rem 0.5rem;
  font-size: 0.8rem;

  &:hover {
    text-decoration: underline;
  }
}

article {
  h2,
  h3,
  h4 {
    line-height: 1.2;
    padding-bottom: 4px;
  }
  h2 {
    color: var(--c-primary-dark);
    font-size: 2rem;
    width: 100%;
    border-bottom: 2px solid var(--c-primary-dark);
    margin: 4.5rem 0 1rem;
    font-weight: 600;
  }

  h3 {
    color: var(--c-primary-dark);
    font-size: 1.75rem;
    border-bottom: 2px dotted #b0b0c0;
    margin: 3.5rem 0 0.5rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1.5rem;
    margin: 2.5rem 0 0.25rem 0.2rem;
    padding: 0;
    padding-left: 0.5rem;
    border-left: 0.25rem solid var(--c-primary-dark);
    color: var(--c-primary-dark);
  }

  h2 + h3,
  h3 + h4 {
    margin-top: 1.25rem;
  }

  a {
    color: #2078e5;
    text-decoration: underline;
  }

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: #000;
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  hr {
    border-top: 2px solid #ccc;
    margin: 1.5rem auto;
    width: 70%;
    min-width: 200px;
  }

  img {
    box-shadow: 0 0 4px rgba(0 0 0 / 0.4);
  }

  img,
  media,
  figure {
    margin: 2em auto;
    width: 100%;
  }

  figure > img {
    margin-bottom: 0.5em;
  }
}

@include mediaquery(sm) {
  h2 {
    font-size: 1.5rem !important;
    text-align: center;
  }
  h3 {
    font-size: 1.25rem !important;
  }
  h4 {
    font-size: 1rem !important;
  }
}
</style>

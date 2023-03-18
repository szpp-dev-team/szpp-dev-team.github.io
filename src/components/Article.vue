<script setup lang="ts">
import Date from "@/components/Date.vue";
</script>

<template>
  <section class="main-section">
    <header>
      <h1>{{ $route.meta.title }}</h1>
      <Date
        v-if="$route.meta.postedAt"
        prefix="投稿: "
        :yyyy-mm-dd="String($route.meta.postedAt)"
        icon="calendar"
        class="article-date"
      />
      <Date
        v-if="$route.meta.lastUpdatedAt"
        prefix="更新: "
        :yyyy-mm-dd="String($route.meta.lastUpdatedAt)"
        icon="pen"
        class="article-date"
      />
    </header>
    <article>
      <slot />
    </article>
  </section>
</template>

<style lang="scss">
.main-section {
  background-color: #fff;
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
  max-width: 980px;
  margin: 0 auto;
  padding: 2rem 5rem 5rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    & {
      padding: 5rem 2rem;
    }
  }

  header {
    margin-bottom: 3rem;
  }

  h1 {
    color: #404040;
    font-size: 3rem;
    font-weight: 500;
    margin: 1rem 0;
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

  hr {
    border-top: 2px solid #ccc;
    margin: 1.5rem auto;
    width: 70%;
    min-width: 200px;
  }

  img,
  media,
  figure {
    margin: 2rem auto;
  }

  figure > img {
    margin: 0.5rem auto;
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

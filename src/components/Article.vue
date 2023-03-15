<script setup lang="ts">
const props = defineProps<{
  frontmatter: {
    meta: object[],
  },
}>();

console.log(props.frontmatter.meta);
</script>

<template>
  <article>
    <slot />
  </article>
</template>

<style lang="scss">
article {
  background-color: #fff;
  min-height: calc(100vh - var(--height-header) - var(--height-footer));
  max-width: 1080px;
  margin: 0 auto;
  padding: 5rem 5rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, .2);

  @media screen and (max-width: 768px) {
    & {
      padding: 5rem 2rem;
    }
  }

  h1 {
    color: #404040;
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  h2 {
    color: var(--c-primary-dark);
    font-size: 2.25rem;
    width: 100%;
    border-bottom: 1px solid var(--c-primary-dark);
    margin: 4rem 0 1rem;
    font-weight: 500;
  }

  h3 {
    color: var(--c-primary-dark);
    font-size: 1.75rem;
    border-bottom: 2px dotted #b0b0c0;
    margin: 2.75rem 0 0.5rem;
    font-weight: 500;
  }

  h4 {
    font-size: 1.5rem;
    margin: 2.75rem 0 0.5rem;
    padding-left: 0.5rem;
    border-left: 4px solid var(--c-primary-dark);
    color: var(--c-primary-dark);
  }

  h2+h3,
  h3+h4 {
    margin-top: 1.5rem;
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

  figure>img {
    margin: .5rem auto;
  }
}
</style>

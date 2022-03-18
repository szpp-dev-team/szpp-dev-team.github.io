<script setup lang="ts">
import Header2 from './Header2.vue';
</script>

<template>
  <section class="about-szpp container">
    <Header2>SZPPとは</Header2>
    <p class="description">
      SZPP はプログラミングを楽しむことを目的としたサークルです。
      プログラミングに興味のある人なら誰でも歓迎です！
      普段は競技プログラミングや勉強会、親睦を深めるための Among Us などをしています。
    </p>
    <div class="linkbutton">
      <RouterLink class="link" to="/about">もっと詳しく</RouterLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-szpp {
  margin-top: 5rem;

  & > .description {
    margin-top: 1rem;
  }

  & > .linkbutton {
    margin-top: 2rem;
    text-align: center;

    & > .link {
      border-radius: 8px;
      background-color: var(--theme-main);
      text-decoration: none;
      color: #fff;
      padding: 0.5rem 1.5rem;
    }
  }
}
</style>

<script setup lang="ts">
import SzppIcon from './SzppIcon.vue';
</script>

<template>
  <section class="hero-section">
    <SzppIcon class="icon" />
    <div class="texts">
      <div class="title">SZPP</div>
      <div class="subtitle">静岡大学プログラミングサークル</div>
    </div>
  </section>
</template>

<style lang="scss">
.hero-section {
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 8px;
  }

  & > .icon {
    width: 400px;
    height: auto;
  }

  & > .texts {
    & {
      text-align: center;
    }

    & > .title {
      color: var(--fg-theme);
      font-size: 3rem;
    }

    & > .subtitle {
      color: var(--fg-secondary);
      font-size: 1rem;
    }
  }

}
</style>

<script setup lang="ts">
import SzppIcon from './SzppIcon.vue';
</script>

<template>
  <div class="hero-section">
    <SzppIcon class="icon" />
    <div class="texts">
      <div class="title">SZPP</div>
      <div class="subtitle">静岡大学プログラミングサークル</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
      color: var(--c-primary-deep);
      font-size: 3rem;
      font-weight: bold;
    }

    & > .subtitle {
      color: var(--c-secondary);
      font-size: 1rem;
    }
  }

}
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';

const visible = ref(true);

const headerCssClass = computed(() => ({
  invisible: !visible.value,
}));

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  visible.value = y < lastScrollY || y < (window.innerHeight >> 2);
  lastScrollY = y;
})
</script>

<template>
  <header class="header" :class="headerCssClass" v-bind="$attrs">
    <RouterLink class="header__logo" to="/">
      <img class="header__logo__img" src="/szpp-logo-untransparent.jpeg" alt="SZPP's logo" />
      <span>SZPP</span>
    </RouterLink>
  </header>
  <div class="transparent-height-keep-header"></div>
</template>


<style scoped lang="scss">
.header {
  height: var(--header-height);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #4acbff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: 0.4s;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.invisible {
    transform: translateY(calc(-0.9 * var(--header-height)));
    opacity: 0;
    box-shadow: none;
  }

  &__logo {
    font-size: 32px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    letter-spacing: 1.5;
    padding: 4px 8px;
    height: 100%;
    display: flex;
    align-items: center;

    &__img {
      border-radius: 50%;
      height: 90%;
      width: auto;
      padding: 2px;
      margin-right: 4px;
    }
  }
}

.transparent-height-keep-header {
  height: var(--header-height);
  margin: 0;
}
</style>

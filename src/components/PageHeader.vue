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
  <header class="header" :class="headerCssClass">
    <img src="/szpp-logo-untransparent.jpeg" alt="logo" class="header_icon" />
  </header>
</template>


<style scoped lang="scss">
.header {
  height: var(--header-height);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .5);
  background-color: var(--theme-main);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: .2s;
  z-index: 500;

  &.invisible {
    transform: translateY(calc(-1 * (var(--header-height) + 32px)));
  }

  &_icon {
    height: 100%;
    width: auto;
  }
}
</style>

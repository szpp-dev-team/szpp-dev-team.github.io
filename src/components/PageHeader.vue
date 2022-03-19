<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue';

const visible = ref(true);

const headerCssClass = computed(() => visible.value ? '' : 'invisible');

let lastScrollY = window.scrollY;

const handleScroll = () => {
  const y = window.scrollY;
  visible.value = y < lastScrollY || y < (window.innerHeight >> 2);
  lastScrollY = y;
}
window.addEventListener('scroll', handleScroll);
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <header class="header" :class="headerCssClass" v-bind="$attrs">
    <nav class="nav">
      <RouterLink class="logo" to="/">
        <img class="logo__img" src="/szpp-logo-untransparent.jpeg" alt="SZPP's logo" />
        <span>SZPP</span>
      </RouterLink>
      <ul class="nav__links">
        <li class="nav__item"><RouterLink to="/about">SZPP について</RouterLink></li>
        <li class="nav__item"><RouterLink to="/news">お知らせ</RouterLink></li>
        <li class="nav__item"><RouterLink to="/faq">よくある質問</RouterLink></li>
      </ul>
    </nav>
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
  color: white;

  &.invisible {
    transform: translateY(calc(-0.9 * var(--header-height)));
    opacity: 0;
    box-shadow: none;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
  }
}

.transparent-height-keep-header {
  height: var(--header-height);
  margin: 0;
}

.nav {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__links {
    display: flex;
    list-style: none;
    height: 100%;
    align-items: center;
  }

  &__item {
    padding: 4px 12px;
    height: 100%;
    transition: .2s;

    &:hover {
      background-color: white;
      color: var(--c-primary-main);
    }
  }
}

.logo {
  font-size: 32px;
  font-weight: bold;
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
    pointer-events: none;
  }
}
</style>

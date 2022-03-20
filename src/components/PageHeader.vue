<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import ExternalLink from './ExternalLink.vue';

const sideMenuVisible = ref(false);
const handleMenuButtonClick = () => { sideMenuVisible.value = !sideMenuVisible.value; };

const headerVisible = ref(true);
let lastScrollY = window.scrollY;

const handleScroll = () => {
  const y = window.scrollY;
  headerVisible.value = (sideMenuVisible.value) || (y < lastScrollY) || y < (window.innerHeight >> 2);
  lastScrollY = y;
}
window.addEventListener('scroll', handleScroll);
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

const handleLinkClick = () => { sideMenuVisible.value = false; };
</script>

<template>
  <header class="header" :class="headerVisible ? '' : 'invisible'" v-bind="$attrs">
    <nav class="nav">
      <RouterLink class="logo" to="/">
        <img class="logo__img" src="/szpp-logo-untransparent.jpeg" alt="SZPP's logo" />
        <span>SZPP</span>
      </RouterLink>
      <ul class="nav__link-list" :class="sideMenuVisible ? '' : 'invisible'">
        <li class="nav__link-list__item">
          <RouterLink class="nav__link-list__link" to="/about" @click="handleLinkClick">SZPP について</RouterLink>
        </li>
        <li class="nav__link-list__item">
          <RouterLink class="nav__link-list__link" to="/events" @click="handleLinkClick">イベント</RouterLink>
        </li>
        <li class="nav__link-list__item">
          <RouterLink class="nav__link-list__link" to="/faq" @click="handleLinkClick">よくある質問</RouterLink>
        </li>
        <li class="nav__link-list__item">
          <ExternalLink class="nav__link-list__link --icon" href="https://github.com/szpp-dev-team/">
            <i class="fa-brands fa-github"></i>
          </ExternalLink>
        </li>
        <li class="nav__link-list__item">
          <ExternalLink class="nav__link-list__link --icon" href="https://twitter.com/szpp_3776">
            <i class="fa-brands fa-twitter"></i>
          </ExternalLink>
        </li>
      </ul>
      <button
        class="menu-toggle-button"
        :class="sideMenuVisible ? 'active' : ''"
        @click="handleMenuButtonClick"
      >
        <div class="menu-toggle-button__container">
          <span class="menu-toggle-button__line1"></span>
          <span class="menu-toggle-button__line2"></span>
          <span class="menu-toggle-button__line3"></span>
        </div>
      </button>
    </nav>
  </header>
  <div class="transparent-height-keep-header"></div>
</template>


<style scoped lang="scss">
.header {
  height: var(--height-header);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: var(--c-primary-main);
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
  font-size: 16px;

  &.invisible {
    transform: translateY(calc(-0.9 * var(--height-header)));
    opacity: 0;
    box-shadow: none;
  }

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.transparent-height-keep-header {
  height: var(--height-header);
  margin: 0;
}

.nav {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__link-list {
    display: flex;
    list-style: none;
    height: 100%;
    align-items: center;
    margin: 0;
    padding: 0;

    &__item {
      height: 100%;
    }

    &__link {
      height: 100%;
      padding: 0 12px;
      transition: 0.2s;

      &:hover {
        background-color: white;
        color: var(--c-primary-main);
      }

      &.--icon {
        font-size: 32px;
      }
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

.menu-toggle-button {
  display: none;
  position: fixed;
  height: var(--height-header);
  width: var(--height-header);
  top: 0;
  right: 0;
  padding: 16px 14px 20px 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &__container {
    position: relative;
    height: 100%;
    width: 100%;
    display: block;
  }

  $humberger-line-width: 4px;

  @mixin humburger-line() {
    position: absolute;
    left: 0;
    width: 100%;
    height: $humberger-line-width;
    background-color: #fff;
    border-radius: 4px;
    transition: all 0.4s;
  }

  &__line1 {
    @include humburger-line();
    top: 0;
  }
  &__line2 {
    @include humburger-line();
    top: calc(50%);
  }
  &__line3 {
    @include humburger-line();
    bottom: -$humberger-line-width;
  }

  /* TODO: 現状はハンバーガーメニューのサイズに依存している。translateY の値をハードコードせずに式で表現したい */
  &.active {
    .menu-toggle-button__line1 {
      transform: translateY(12px) rotate(-315deg);
    }
    .menu-toggle-button__line2 {
      opacity: 0;
    }
    .menu-toggle-button__line3 {
      transform: translateY(-13px) rotate(315deg);
    }
  }
}

@media screen and (max-width: 679px) {
  .menu-toggle-button {
    display: block;
  }

  .nav {
    &__link-list {
      display: flex;
      flex-direction: column;
      padding-top: var(--height-header);
      position: fixed;
      right: 0;
      top: 0;
      min-height: 100vh;
      background-color: var(--c-primary-main);
      transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);

      &__item {
        height: initial;
        width: 100%;
      }

      &__link {
        padding: 16px 24px;
      }
    }
    &__link-list.invisible {
      transform: translateX(105%);
    }
  }
}
</style>

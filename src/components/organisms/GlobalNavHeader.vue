<script setup lang="ts">
import { ref } from "vue";
import ExternalLink from "@/components/atoms/ExternalLink.vue";

const sideMenuVisible = ref(false);
const handleMenuButtonClick = () => {
  sideMenuVisible.value = !sideMenuVisible.value;
};

const handleLinkClick = () => {
  sideMenuVisible.value = false;
};
const handleBackdropClick = () => {
  sideMenuVisible.value = false;
};
</script>

<template>
  <header class="header" v-bind="$attrs">
    <Teleport to="body">
      <button
        class="nav__backdrop"
        :class="sideMenuVisible ? '' : 'invisible'"
        @click="handleBackdropClick"
        type="button"
      ></button>
    </Teleport>
    <nav class="nav">
      <RouterLink class="logo" to="/">
        <span class="logo__main">SZPP</span>
        <span class="logo__sub"
          >静岡大学<br />プログラミング<br />サークル</span
        >
      </RouterLink>
      <ul class="nav__link-list" :class="sideMenuVisible ? '' : 'invisible'">
        <li class="nav__link-list__item">
          <RouterLink
            class="nav__link-list__link"
            to="/about"
            @click="handleLinkClick"
            >SZPP について</RouterLink
          >
        </li>
        <li class="nav__link-list__item">
          <RouterLink
            class="nav__link-list__link"
            to="/news"
            @click="handleLinkClick"
            >お知らせ</RouterLink
          >
        </li>
        <li class="nav__link-list__item">
          <RouterLink
            class="nav__link-list__link"
            to="/products"
            @click="handleLinkClick"
            >製作物</RouterLink
          >
        </li>
        <li class="nav__link-list__item">
          <RouterLink
            class="nav__link-list__link"
            to="/faq"
            @click="handleLinkClick"
            >よくある質問</RouterLink
          >
        </li>
        <li class="nav__link-list__item">
          <ExternalLink
            class="nav__link-list__link --icon"
            href="https://github.com/szpp-dev-team/"
          >
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </ExternalLink>
        </li>
        <li class="nav__link-list__item">
          <ExternalLink
            class="nav__link-list__link --icon"
            href="https://x.com/szpp_3776"
          >
            <i class="fa-brands fa-x-twitter"></i>
            <span>X</span>
          </ExternalLink>
        </li>
      </ul>
      <button
        class="menu-toggle-button"
        :class="sideMenuVisible ? 'active' : ''"
        @click="handleMenuButtonClick"
        type="button"
      >
        <div class="menu-toggle-button__container">
          <span class="menu-toggle-button__line1"></span>
          <span class="menu-toggle-button__line2"></span>
          <span class="menu-toggle-button__line3"></span>
        </div>
      </button>
    </nav>
  </header>
</template>

<style lang="scss">
body {
  margin-top: var(--height-header) !important;
}
</style>

<style scoped lang="scss">
@import "@/styles/_keyframes.scss";

.header {
  height: var(--height-header);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: var(--c-primary-main);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;

  a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.nav {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__backdrop {
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    animation: fade-in 0.3s;

    &.invisible {
      display: none;
    }
  }

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

        > span {
          text-indent: -9999px;
          font-size: 0;
        }
      }
    }
  }
}

.logo {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  height: 100%;
  color: #fff;

  &__main {
    font-family: var(--font-logo);
    font-weight: 800;
    font-size: 32px;
  }

  &__sub {
    border-left: 2px solid #fff;
    margin-left: 6px;
    padding-left: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.1;
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

@media screen and (max-width: 768px) {
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
      box-shadow: 0 0 8px rgb(0 0 0 / 30%);

      &__item {
        height: initial;
        width: 100%;
        border-top: 1px solid var(--c-primary-light);

        &:last-child {
          border-bottom: 1px solid var(--c-primary-light);
        }
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

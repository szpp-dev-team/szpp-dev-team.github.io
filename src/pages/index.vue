<route lang="yaml">
meta:
  title: "" # use default title
  description:
    SZPP (すずっぷ) はプログラミングを楽しむことを目的としたサークルです。
    浜松キャンパスまたはオンラインにて活動しています。
    主な活動内容は競技プログラミングや CTF
    、技術の勉強会、中高生向けの市民講座です。 親睦を深めるための Among Us
    やオンラインボードゲームも毎週実施しています。
</route>

<script setup lang="ts">
import ArticleCardGrid from "@/components/ArticleCardGrid.vue";
import PageSet from "@/modules/PageSet";
import SzppIcon from "@/components/atoms/SzppIcon.vue";
import SimpleButton from "@/components/atoms/SimpleButton.vue";
import FlexBox from "@/components/FlexBox.vue";
</script>

<template>
  <div>
    <section class="hero">
      <h1 class="hero__overlay">
        <strong class="hero__title">SZPP</strong>
        <span class="hero__subtitle">静岡大学<br />プログラミングサークル</span>
      </h1>
      <picture class="hero__image-wrapper">
        <source
          srcset="/competitive-programming-scene.webp"
          type="image/webp"
        />
        <img
          class="hero__image"
          src="/competitive-programming-scene.jpeg"
          alt="Hero image"
        />
      </picture>
    </section>
    <section class="about">
      <figure class="about__image-wrapper">
        <SzppIcon class="about__image" padded />
        <figcaption class="about__image-caption">
          SZPP 公式キャラクター<br />すずっぴーくん
        </figcaption>
      </figure>
      <div class="about__text-wrapper">
        <h2 class="about__title">
          <ruby
            ><span class="--logo-font">SZPP</span><rp>(</rp><rt>すずっぷ</rt
            ><rp>)</rp></ruby
          >
          とは
        </h2>
        <p class="about__description">{{ $route.meta.description }}</p>
        <SimpleButton
          class="about__detail-link"
          theme="primary"
          rounding="full"
          router-link="/about"
          >もっと詳しく</SimpleButton
        >
      </div>
    </section>
    <section class="articles-section">
      <h2 class="articles-section__title">最近のお知らせ</h2>
      <ArticleCardGrid :articles="PageSet.news().slice(0, 12)" />
      <FlexBox justify="center">
        <SimpleButton
          class="articles-section__detail-link"
          theme="secondary"
          rounding="full"
          router-link="/news"
          >全てのお知らせを見る</SimpleButton
        >
      </FlexBox>
    </section>
    <section class="articles-section">
      <h2 class="articles-section__title">制作物一覧</h2>
      <ArticleCardGrid :articles="PageSet.products()" />
      <FlexBox justify="center">
        <SimpleButton
          class="articles-section__detail-link"
          theme="secondary"
          rounding="full"
          router-link="/products"
          >全ての作品を見る</SimpleButton
        >
      </FlexBox>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/_breakpoint.scss";
$hero-max-height: 640px;

.hero {
  width: 100%;
  position: relative;
  color: #fff;
  font-size: 1.5rem;

  @include mediaquery(sm) {
    font-size: 1rem;
  }

  @include mediaquery(md) {
    font-size: 2rem;
  }

  @include mediaquery(lg) {
    font-size: 3rem;
  }

  &__overlay {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    padding-left: 1.75em;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      left: -1em;
      top: 0;
      height: 100%;
      width: 14em;
      background: var(--c-primary-dark);
      transform: skewX(30deg);
    }

    *::selection {
      color: var(--c-primary-dark);
      background: var(--c-primary-light);
    }
  }

  &__title {
    line-height: 1;
    margin-bottom: 0.2em;
    font-size: 2.5em;
    font-weight: 800;
    font-family: var(--font-logo);
  }

  &__subtitle {
    display: block;
    font-size: 1em;
    font-weight: 600;
  }

  &__image-wrapper {
    width: 100%;
    height: 100%;
    background: #000110;
    max-height: $hero-max-height;
  }

  &__image {
    opacity: 0.35;
    width: 100%;
    max-height: $hero-max-height;
    object-fit: cover;
  }
}

.about {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
  padding: 4em 1em 5em;
  background: #606060;
  color: #fff;
  flex-direction: column;

  @include mediaquery(md) {
    flex-direction: row;
    padding: 3em 2em 4.5em;
  }

  @include mediaquery(lg) {
    font-size: 1.25rem;
  }

  &__image-wrapper {
    max-width: 14em;
  }

  &__image {
    min-width: 10em;
    border-radius: 999px;
  }

  &__text-wrapper {
    max-width: 35em;
    position: relative;
  }

  &__title {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 0.5em;
    text-align: center;

    @include mediaquery(md) {
      text-align: left;
    }
  }

  &__detail-link {
    position: absolute;
    bottom: -3.25em;
    right: 0;

    &::before {
      content: ">> ";
    }
  }
}

.articles-section {
  padding: 2rem 0 4rem;

  &__title {
    color: var(--c-primary-dark);
    margin: 1.5rem 0;
    text-align: center;
    font-weight: 600;
    font-size: 2rem;
    border-bottom: 4px solid var(--c-primary-dark);
  }

  &__detail-link {
    margin: 1.5em auto;
    font-size: 1.25rem;

    &::before {
      content: ">> ";
    }
  }
}
</style>

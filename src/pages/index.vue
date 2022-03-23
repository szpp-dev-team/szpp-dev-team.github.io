<route lang="yaml">
meta:
  title: ''  # use default title
  description:
    静岡大学プログラミングサークル SZPP (すずっぷ) はプログラミングを楽しむことを目的としたサークルです。
    浜松キャンパスを拠点に活動しています。
    プログラミング初心者も大歓迎です。
    普段は競技プログラミングや技術の勉強会、親睦を深めるための Among Us などをしています。
</route>

<script setup lang="ts">
import TheHero from "@/components/TheHero.vue";
import EventList from "@/components/EventList.vue";
import PageSet from '@/modules/PageSet';
import Center from "@/components/Center.vue";
</script>

<template>
  <div class="top-page">
    <TheHero />
    <section class="about-szpp container">
      <h2 class="top-page__section-header --border-bottom">SZPPとは</h2>
      <p class="about-szpp__description">
        SZPP はプログラミングを楽しむことを目的としたサークルです。
        浜松キャンパスを拠点に活動しています。
        プログラミング初心者も大歓迎です！
        普段は競技プログラミングや勉強会、親睦を深めるための Among Us などをしています。
      </p>
      <Center>
        <RouterLink class="detail-button" to="/about">もっと詳しく</RouterLink>
      </Center>
    </section>
    <section class="newest-events container">
      <h2 class="top-page__section-header">最新イベント</h2>
      <EventList class="newest-events__event-list" :routes="PageSet.events().slice(0, 3)" />
      <Center>
        <RouterLink class="detail-button" to="/events">全てのイベントを見る</RouterLink>
      </Center>
    </section>
    <section class="product-pages container">
        <h2 class="top-page__section-header --border-bottom">製作物</h2>
        <p class="about-szpp__description">
            SZPPでは、競技プログラミングのほかに、開発も行っております。
            ホームページ作成や学務情報システムのAPI、cvpnなどを作成しました。
            開発部に決まった指針はなく、部員全員が未経験な分野でも勉強会を通して開発をすることができます！
        </p>
        <Center>
          <RouterLink class="detail-button" to="/products">製作物一覧を見る</RouterLink>
        </Center>
    </section>
  </div>
</template>

<style scoped lang="scss">
.top-page {
  &__section-header {
    color: var(--c-primary-main);
    text-align: center;
    margin: 0.5rem auto;
    font-size: 2rem;

    &.--border-bottom {
      border-bottom: 1px solid var(--c-primary-main);
    }
  }
}
.about-szpp {
  margin-top: 5rem;

  &__description {
    margin: 1rem auto;
  }
}
.newest-events {
  margin: 6rem auto 0;

  &__event-list {
    margin-bottom: 2rem;
  }
}
.product-pages{
    margin: 6rem auto 0;
}
.detail-button {
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
  background-color: var(--c-primary-main);
  color: #fff;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: var(--c-primary-deep);
  }
}
</style>

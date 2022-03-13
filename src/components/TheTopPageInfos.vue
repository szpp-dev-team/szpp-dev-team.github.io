<script setup lang="ts">
import InfoCard from './InfoCard.vue';
import Header2 from './Header2.vue';

</script>

<template>
  <section class="szpp-infos">
    <div class="header container">
      <Header2>SZPPとは</Header2>
    </div>
    <div class="cards">
      <InfoCard
        v-for="i in [0, 1, 2, 4, 5, 6, 7]"
        img-src="/dummy-1.jpg"
        img-alt="dummy"
        href="/"
        title="市民講座を開きます"
        class="card"
      >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</InfoCard>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.szpp-infos {
  margin-top: 5rem;

  & > .header {
    margin-bottom: 2rem;
  }

  & > .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 32px;
    column-gap: 16px;

    & > .card {
      width: 100%;
      margin: 0;
    }
  }
}

@media screen and (min-width: 540px) {
  .szpp-infos > .cards > .card {
    width: 40%;
  }
}
@media screen and (min-width: 960px) {
  .szpp-infos > .cards > .card {
    width: 30%;
  }
}
@media screen and (min-width: 1280px) {
  .szpp-infos > .cards > .card {
    width: 22%;
  }
}
</style>

<template>
  <section class="section nft">
    <div class="container nft__container">
      <h2 class="section-title section-title--white nft__title">
        Nft
        <br />
        marketplace
      </h2>
      <p class="nft__descr">
        An NFT is a digital asset that represents real-world objects like art,
        music, in-game items and videos. They are bought and sold online,
        frequently with cryptocurrency, and they are generally encoded with the
        same underlying software as many cryptos.
      </p>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.nft {
  &__container {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(2, min-content);
  }

  &__title {
    color: black;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
}
</style>

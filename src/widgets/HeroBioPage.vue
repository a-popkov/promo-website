<template>
  <section class="hero-secondary hero-secondary--bio">
    <!-- <img
      class="reset-img hero__image"
      width=""
      height=""
      loading="lazy"
      src="../widgets/assets/images/bio/bio-hero-bg.png"
      alt=""
      aria-hidden="true"
    /> -->

    <!-- <picture>
      <source type="image/avif" srcset=".avif" />
      <source type="image/webp" srcset=".webp" />
      <img
        class="reset-img image"
        width=""
        height=""
        loading="lazy"
        src="./src/widgets/assets/images/hero-bg.png"
        alt=""
        aria-hidden="true"
      />
    </picture> -->
    <div class="container">
      <div class="hero__content">
        <h1 class="main-title">
          Bio
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero-secondary {
  min-height: 320px;

  &--bio {
    background-image: url('../widgets/assets/images/bio/bio-hero-bg.png');
    background-position: center top -5px;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
</style>

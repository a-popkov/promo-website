<template>
  <section class="hero">
    <img
      class="reset-img hero__image"
      width=""
      height=""
      loading="lazy"
      src="../widgets/assets/images/hero-bg.png"
      alt=""
      aria-hidden="true"
    />

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
        <h1 class="main-title hero__title">
          Kate Kulish
        </h1>
        <ul class="hero__description strengths">
          <li class="strengths__item">Pureness</li>
          <li class="strengths__item">Energy</li>
          <li class="strengths__item">Practicing mindfulness</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;

  &__image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    max-width: 100%;
  }

  &__content {
    padding: 130px 28px;
    width: 50%;
  }

  &__title {
    margin-bottom: 23px;

    @media (min-width: 1200px) {
      font-size: 250px;
      line-height: 0.88;
    }
  }

  &__description {
    padding-left: 28px;
  }

  @media (min-width: 1200px) {
    height: 1319px;
  }
}

.strengths {
  display: flex;
  flex-wrap: wrap;
  column-gap: 54px;

  &__item {
    font-size: 26px;
    line-height: 1.4;
    color: var(--color-white);
  }
}
</style>

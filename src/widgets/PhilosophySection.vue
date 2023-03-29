<template>
  <section class="section philosophy">
    <div class="container">
      <div class="philosophy__decoration"></div>
      <h2 class="section-title philosophy__title">Philosophy</h2>
      <div class="philosophy__descr">
        <p>
          My&nbsp;name is&nbsp;Kate Kulish. I&nbsp;am an&nbsp;artist from
          Ukraine. For a&nbsp;long time, I&nbsp;have been living in&nbsp;Bali,
          Indonesia. I&nbsp;live my&nbsp;life based on&nbsp;the teachings
          of&nbsp;Buddhist philosophy by&nbsp;practicing mindfulness,
          non-violence, and compassion.
        </p>
        <p>
          The intention of&nbsp;my&nbsp;art is&nbsp;to&nbsp;reflect
          my&nbsp;inner calm. My&nbsp;technique has been shaped over the years
          by&nbsp;visiting many European museums and studying painting
          at&nbsp;university. I&nbsp;was strongly influenced by&nbsp;the works
          of&nbsp;masters, such as&nbsp;Gustav Klimt, Raphael, and Picasso. The
          main topics of&nbsp;my&nbsp;paintings are women, abstract landscapes,
          and decomposed cityscapes.
        </p>
      </div>
      <PhilosophyTrend />
    </div>
  </section>
</template>

<script>
import PhilosophyTrend from './PhilosophyTrend.vue'

export default { components: { PhilosophyTrend } }
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, min-content);
  column-gap: clamp(30px, 4vw, 57px);
  row-gap: 25px;
}

.philosophy {
  position: relative;

  &__decoration {
    position: absolute;
    right: clamp(20px, 15vw, calc((100% - 1807px) / 2));
    top: -7%;
    z-index: -1;
    border-radius: 50%;
    width: clamp(327px, 32vw, 641px);
    height: clamp(327px, 32vw, 641px);
    background-image: url('../widgets/assets/images/philosophy/img-00.png');
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 675px) {
      display: none;
    }
  }

  &__descr {
    margin-bottom: 46px;
    width: 100%;
    max-width: 1281px;

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      margin-bottom: 16px;
    }
  }
}
</style>

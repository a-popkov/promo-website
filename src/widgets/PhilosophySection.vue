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
      <ul class="reset-list philosophy__list">
        <li class="grid philosophy__item">
          <div class="philosophy__image">
            <img
              src="../widgets/assets/images/philosophy/img-01.png"
              alt="philosophy Image 1"
            />
          </div>
          <div class="philosophy__info philosophy__info--women philosophy-info">
            <h3 class="philosophy-info__heading">Women</h3>
            <p class="philosophy-info__descr">
              In&nbsp;my&nbsp;paintings, women represent an&nbsp;object
              of&nbsp;pureness. They are a concentration of&nbsp;beauty and the
              divine. I&nbsp;create faces of&nbsp;women as archaic objects
              without individuality of&nbsp;character. This helps to bring
              me&nbsp;to&nbsp;explore all the qualities of&nbsp;pureness and
              divine creation, such as&nbsp;that seen in&nbsp;Madonna del Prato
              (Raphael).
            </p>
          </div>
          <div
            class="philosophy__info philosophy__info--abstract philosophy-info"
          >
            <h3 class="philosophy-info__heading">Abstract Landscapes</h3>
            <p class="philosophy-info__descr">
              If&nbsp;we&nbsp;remove some forms of&nbsp;standard objects, all
              that remains is&nbsp;pure energy, which merges everything
              together. Everything passes from one to&nbsp;another and
              is&nbsp;constantly moving. This energy fills everything
              around&nbsp;us. Everything that we&nbsp;see serves
              as&nbsp;a&nbsp;vessel for this energy.
            </p>
          </div>
        </li>
        <li class="grid philosophy__item philosophy__item--reverse">
          <div class="philosophy__image">
            <img
              src="../widgets/assets/images/philosophy/img-02.png"
              alt="philosophy Image 2"
            />
          </div>
          <div
            class="philosophy__info philosophy__info--decomposed philosophy-info"
          >
            <h3 class="philosophy-info__heading">Decomposed Cityscapes</h3>
            <p class="philosophy-info__descr">
              For me, the city represents one of the highest manifestations of
              unity among people. The most important part of any city is its
              soul. Each of my cityscapes is an experiment in decomposing the
              city and bringing all the details together. After connecting all
              the details in a completely unthinkable sequence, with an
              incomprehensible perspective, one thing remains unchanged: the
              soul of the city. You can change all the details, but the soul
              will remain unchanged and unshakable.
            </p>
            <p class="philosophy-info__descr">
              In fact, I understand this more than ever, as since many of the
              cities in my beloved Ukraine have been destroyed. Regardless, the
              soul of each city remains unshakable. The cities continue to live,
              even if 90 buildings have been partially destroyed.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
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

  &__list {
    @media (min-width: 909px) {
      display: grid;
      row-gap: 50px;
    }
  }

  &__image {
    grid-column: 1 / 2;
    grid-row: 2 span;

    img {
      width: clamp(228px, 30vw, 546px);
      height: clamp(228px, 30vw, 546px);
    }

    @media (max-width: 908px) {
      grid-row: 1 / 2;
    }

    @media (max-width: 675px) {
      display: none;
    }
  }

  &__item {
    &--reverse {
      flex-direction: row-reverse;
      justify-content: flex-end;

      .philosophy__image {
        grid-column: 2 / 3;

        img {
          @media (min-width: 1400px) {
            transform: translateY(-120px);
          }
        }
      }
    }
  }

  &__info {
    display: grid;
    align-items: center;

    &--women {
      align-content: end;

      @media (max-width: 908px) {
        align-content: center;
      }
    }

    &--abstract {
      align-content: start;
      margin-bottom: 21px;

      @media (max-width: 908px) {
        grid-row: 2 / 3;
        grid-column: 1 / 2 span;
      }
    }

    &--decomposed {
      grid-column: 1 / 2;
      grid-row: 1 / 2 span;
      align-content: start;
      width: 100%;
      max-width: 947px;

      p:first-of-type {
        margin-bottom: 15px;
      }
    }
  }
}

.philosophy-info {
  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
  }

  &__heading {
    margin-bottom: clamp(4px, 2vw, 23px);
    font-weight: var(--font-semibold);
    font-size: clamp(25px, 4vw, 45px);
    line-height: 0.78;
    -webkit-text-stroke: 1px var(--color-grey-darker);
    color: var(--color-white);

    @media (max-width: 675px) {
      margin-bottom: 4px;
    }
  }

  &__descr {
    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
}
</style>

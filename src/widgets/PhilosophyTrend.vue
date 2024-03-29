<template>
  <ul class="reset-list trend">
    <li class="grid trend__item">
      <div class="trend__image">
        <img
          class=""
          loading="lazy"
          src="../widgets/assets/images/philosophy/philosophy-img-01.jpg"
          alt="Philosophy decoration"
          aria-hidden="true"
        />
      </div>
      <div class="trend__info trend__info--women trend-info">
        <h3 class="trend-info__heading">Women</h3>
        <p class="trend-info__descr">
          In&nbsp;my&nbsp;paintings, women represent an&nbsp;object
          of&nbsp;pureness. They are a concentration of&nbsp;beauty and the
          divine. I&nbsp;create faces of&nbsp;women as archaic objects without
          individuality of&nbsp;character. This helps to bring
          me&nbsp;to&nbsp;explore all the qualities of&nbsp;pureness and divine
          creation, such as&nbsp;that seen in&nbsp;Madonna del Prato (Raphael).
        </p>
      </div>
      <div class="trend__info trend__info--abstract trend-info">
        <h3 class="trend-info__heading">Abstract Landscapes</h3>
        <p class="trend-info__descr">
          If&nbsp;we&nbsp;remove some forms of&nbsp;standard objects, all that
          remains is&nbsp;pure energy, which merges everything together.
          Everything passes from one to&nbsp;another and is&nbsp;constantly
          moving. This energy fills everything around&nbsp;us. Everything that
          we&nbsp;see serves as&nbsp;a&nbsp;vessel for this energy.
        </p>
      </div>
    </li>
    <li class="grid trend__item trend__item--reverse">
      <div class="trend__image">
        <img
          class=""
          loading="lazy"
          src="../widgets/assets/images/philosophy/philosophy-img-02.jpg"
          alt="Philosophy decoration"
          aria-hidden="true"
        />
      </div>
      <div class="trend__info trend__info--decomposed trend-info">
        <h3 class="trend-info__heading">Decomposed Cityscapes</h3>
        <p class="trend-info__descr">
          For me, the city represents one of the highest manifestations of unity
          among people. The most important part of any city is its soul. Each of
          my cityscapes is an experiment in decomposing the city and bringing
          all the details together. After connecting all the details in a
          completely unthinkable sequence, with an incomprehensible perspective,
          one thing remains unchanged: the soul of the city. You can change all
          the details, but the soul will remain unchanged and unshakable.
        </p>
        <p class="trend-info__descr">
          In fact, I understand this more than ever, as since many of the cities
          in my beloved Ukraine have been destroyed. Regardless, the soul of
          each city remains unshakable. The cities continue to live, even if 90
          buildings have been partially destroyed.
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.trend {
  @media (min-width: 909px) {
    display: grid;
    row-gap: 50px;
  }

  &__image {
    grid-column: 1 / 2;
    grid-row: 2 span;

    img {
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      border: 3px solid #272727;
      background-color: #c4c4c4;
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
      justify-content: flex-end;
      .trend__image {
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

.trend-info {
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

<template>
  <section class="section gallery">
    <div class="container">
      <h2 class="section-title gallery__title">Gallery</h2>
    </div>
    <swiper
      :slides-per-view="5"
      :space-between="30"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="append-buttons"
      :modules="modules"
      :hashNavigation="{ watchState: true }"
      :navigation="true"
      :pagination="{ clickable: true }"
    >
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-01.jpg"
            alt=""
          />
          <div class="painting__descr">
            <h3 class="painting__name">
              Name of the painting
              <time datetime="2020-03-15">(15.03.2020)</time>
            </h3>
            <div class="painting__price">
              330.00 USD
            </div>
            <button class="reset-btn painting__buy" type="button">Buy</button>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-01.jpg"
            alt=""
          />
          <div class="painting__descr">
            <h3 class="painting__name">
              Name of the painting
              <time datetime="2020-03-15">(15.03.2020)</time>
            </h3>
            <div class="painting__price">
              330.00 USD
            </div>
            <button class="reset-btn painting__buy" type="button">Buy</button>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-01.jpg"
            alt=""
          />
          <div class="painting__descr">
            <h3 class="painting__name">
              Name of the painting
              <time datetime="2020-03-15">(15.03.2020)</time>
            </h3>
            <div class="painting__price">
              330.00 USD
            </div>
            <button class="reset-btn painting__buy" type="button">Buy</button>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-01.jpg"
            alt=""
          />
          <div class="painting__descr">
            <h3 class="painting__name">
              Name of the painting
              <time datetime="2020-03-15">(15.03.2020)</time>
            </h3>
            <div class="painting__price">
              330.00 USD
            </div>
            <button class="reset-btn painting__buy" type="button">Buy</button>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-01.jpg"
            alt=""
          />
          <div class="painting__descr">
            <h3 class="painting__name">
              Name of the painting
              <time datetime="2020-03-15">(15.03.2020)</time>
            </h3>
            <div class="painting__price">
              330.00 USD
            </div>
            <button class="reset-btn painting__buy" type="button">Buy</button>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-01.jpg"
            alt=""
          />
          <div class="painting__descr">
            <h3 class="painting__name">
              Name of the painting
              <time datetime="2020-03-15">(15.03.2020)</time>
            </h3>
            <div class="painting__price">
              330.00 USD
            </div>
            <button class="reset-btn painting__buy" type="button">Buy</button>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-01.jpg"
            alt=""
          />
          <div class="painting__descr">
            <h3 class="painting__name">
              Name of the painting
              <time datetime="2020-03-15">(15.03.2020)</time>
            </h3>
            <div class="painting__price">
              330.00 USD
            </div>
            <button class="reset-btn painting__buy" type="button">Buy</button>
          </div>
        </article>
      </swiper-slide>
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-01.jpg"
            alt=""
          />
          <div class="painting__descr">
            <h3 class="painting__name">
              Name of the painting
              <time datetime="2020-03-15">(15.03.2020)</time>
            </h3>
            <div class="painting__price">
              330.00 USD
            </div>
            <button class="reset-btn painting__buy" type="button">Buy</button>
          </div>
        </article>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

export default {
  components: { Swiper, SwiperSlide },
  setup () {
    const onSwiper = swiper => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination]
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: -190px;

  &__title {
    margin-bottom: 50px;
  }
}

.swiper {
  position: relative;
  width: 100%;
  // height: 817px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: -50px;
}

.swiper-pagination-bullet-active {
  background: #000;
}

.swiper-slide .swiper-slide-active {
  transform: scale(1) translate(0, 0%) !important;
}

.painting {
  &__img {
    border: 3px solid #393939;
    margin-bottom: 33px;
    display: block;
    background-color: #c4c4c4;
  }

  &__descr {
    position: relative;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 2px;
      height: 23px;
      background-color: #3d3d3d;
      transform: translateX(-50%);
    }
  }

  &__name {
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
    color: #3d3d3d;

    time {
      display: block;
      font-weight: 400;
    }
  }

  &__price {
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
    text-align: center;
    color: #3d3d3d;
  }

  &__buy {
    @extend .painting__name;
    text-transform: uppercase;
    color: #4137d0;
  }
}
</style>

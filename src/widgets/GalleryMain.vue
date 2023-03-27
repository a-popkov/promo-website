<template>
  <section class="section gallery">
    <div class="container">
      <h2 class="section-title gallery__title">Gallery</h2>
    </div>
    <swiper
      class="gallery__slider"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :hashNavigation="{
        watchState: true
      }"
      :navigation="{
        nextEl: '.swiper-gallery-next',
        prevEl: '.swiper-gallery-prev'
      }"
      :breakpoints="{
        320: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        567: {
          slidesPerView: 3,
          spaceBetween: 25
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      }"
      :pagination="{
        el: '.gallery-pagination',
        clickable: true
      }"
    >
      <swiper-slide>
        <article class="painting">
          <img
            class="painting__img"
            loading="lazy"
            src="../widgets/assets/images/gallery/pain-05.jpg"
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
            src="../widgets/assets/images/gallery/pain-04.jpg"
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
            src="../widgets/assets/images/gallery/pain-02.jpg"
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
            src="../widgets/assets/images/gallery/pain-03.jpg"
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
            src="../widgets/assets/images/gallery/pain-02.jpg"
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
            src="../widgets/assets/images/gallery/pain-03.jpg"
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
    <div class="swiper-nav gallery-slider__navigation">
      <button class="reset-btn swiper-btn swiper-btn-prev swiper-gallery-prev">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 1L1 5L5 9" stroke="#4137D0" stroke-linecap="round" />
        </svg>
      </button>
      <div class="swiper-pagination gallery-pagination"></div>
      <button class="reset-btn swiper-btn swiper-btn-next swiper-gallery-next">
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L5 5L1 9" stroke="#4137D0" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

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

<style lang="scss">
.gallery {
  margin-top: -190px;

  &__title {
    margin-bottom: 50px;
  }

  &__slider {
    min-height: 100%;
    margin-inline: -10%;
    max-width: var(--container-width);
    overflow-x: hidden;

    .swiper-slide:nth-child(odd) {
      transform: translateY(40px);
      width: 584px;
      height: 584px;
    }
  }
}

.swiper {
}

.swiper-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-start: 26px;
  margin-inline: auto;
  padding: 15px 19px;
  width: 129px;
  height: 39px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid #e9e9e9;
  border-radius: 150px;
}

.swiper-btn {
  svg path {
    stroke: #4137d0;
  }
}

.swiper-btn:disabled {
  svg path {
    opacity: 0.2;
  }
}

.swiper-pagination.swiper-pagination {
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-pagination-bullet {
  --swiper-pagination-bullet-size: 4px;
  --swiper-pagination-bullet-width: 4px;
  --swiper-pagination-bullet-height: 4px;
  --swiper-pagination-bullet-inactive-color: #535353;
  --swiper-pagination-bullet-inactive-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 5px;

  // width: 4px;
  // height: 4px;
  // background: #535353;
  // opacity: 1;
}

.swiper-pagination-bullet-active {
  --swiper-pagination-color: #4137d0;

  outline: 1px solid var(--swiper-pagination-color);
  outline-offset: 2px;
}

.painting {
  &__img {
    border: 3px solid #393939;
    margin-bottom: 33px;
    display: block;
    width: 100%;
    height: 100%;
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

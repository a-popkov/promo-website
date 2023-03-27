<template>
  <section class="section exhibitions">
    <div class="container">
      <h2 class="section-title section-title--center exhibitions__title">
        Exhibitions
      </h2>
      <Swiper
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        :hashNavigation="{
          watchState: true
        }"
        :navigation="{
          nextEl: '.exhibitions-next',
          prevEl: '.exhibitions-prev'
        }"
        :breakpoints="{
          320: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          567: {
            slidesPerView: 2,
            spaceBetween: 25
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }"
        :pagination="{
          el: '.exhibitions-pagination',
          clickable: true
        }"
      >
        <SwiperSlide>
          <article class="card-exhibitions">
            <img
              class="reset-img card-exhibitions__img"
              loading="lazy"
              src="../widgets/assets/images/exhibitions/ex-img-01.jpg"
              alt=""
            />
            <div class="card-exhibitions__info">
              <h3 class="card-exhibitions__heading">
                International Symposium in Mallnitz, Austria
              </h3>
              <p class="card-exhibitions__descr">
                It so happened that I was not used to living without traveling,
                and since there are a lot…
              </p>
              <a class="reset-link card-exhibitions__link" href="#"
                >Continue reading
              </a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article class="card-exhibitions">
            <img
              class="reset-img card-exhibitions__img"
              loading="lazy"
              src="../widgets/assets/images/exhibitions/ex-img-02.jpg"
              alt=""
            />
            <div class="card-exhibitions__info">
              <h3 class="card-exhibitions__heading">
                International Symposium in Mallnitz, Austria
              </h3>
              <p class="card-exhibitions__descr">
                It so happened that I was not used to living without traveling,
                and since there are a lot…
              </p>
              <a class="reset-link card-exhibitions__link" href="#"
                >Continue reading
              </a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article class="card-exhibitions">
            <img
              class="reset-img card-exhibitions__img"
              loading="lazy"
              src="../widgets/assets/images/exhibitions/ex-img-03.jpg"
              alt=""
            />
            <div class="card-exhibitions__info">
              <h3 class="card-exhibitions__heading">
                International Symposium in Mallnitz, Austria
              </h3>
              <p class="card-exhibitions__descr">
                It so happened that I was not used to living without traveling,
                and since there are a lot…
              </p>
              <a class="reset-link card-exhibitions__link" href="#"
                >Continue reading
              </a>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article class="card-exhibitions">
            <img
              class="reset-img card-exhibitions__img"
              loading="lazy"
              src="../widgets/assets/images/exhibitions/ex-img-03.jpg"
              alt=""
            />
            <div class="card-exhibitions__info">
              <h3 class="card-exhibitions__heading">
                International Symposium in Mallnitz, Austria
              </h3>
              <p class="card-exhibitions__descr">
                It so happened that I was not used to living without traveling,
                and since there are a lot…
              </p>
              <a class="reset-link card-exhibitions__link" href="#"
                >Continue reading
              </a>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-nav exhibitions__navigation">
        <button class="reset-btn swiper-btn swiper-btn-prev exhibitions-prev">
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
        <div class="swiper-pagination exhibitions-pagination"></div>
        <button class="reset-btn swiper-btn swiper-btn-next exhibitions-next">
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

<style lang="scss" scoped>
.exhibitions {
  &__title {
    margin-bottom: 43px;
  }

  &__list {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}
.card-exhibitions {
  &__list {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  &__heading {
    margin-bottom: 4px;
    font-weight: var(--font-semibold);
    font-size: 25px;
    line-height: 1.4;
    text-transform: uppercase;
    color: #000;
  }

  &__descr {
    margin-bottom: 15px;
    font-size: 25px;
    line-height: 1.4;
    color: #000;
  }

  &__link {
    font-weight: var(--font-semibold);
    font-size: 20px;
    line-height: 1.5;
    text-transform: uppercase;
    color: #4137d0;
  }
}
</style>

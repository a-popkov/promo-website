<template>
  <section class="section nft">
    <img
      class="nft__bg"
      src="../widgets/assets/images/nft/nft-bg.png"
      loading="lazy"
      aria-hidden="true"
      alt=""
    />
    <div class="container nft__container">
      <div class="nft__heading">
        <h2 class="section-title section-title--white nft__title">
          Nft
          <br />
          marketplace
        </h2>
        <p class="nft__descr">
          An NFT is a digital asset that represents real-world objects like art,
          music, in-game items and videos. They are bought and sold online,
          frequently with cryptocurrency, and they are generally encoded with
          the same underlying software as many cryptos.
        </p>
      </div>
      <Swiper
        class="nft__slider"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :modules="modules"
        :hashNavigation="{
          watchState: true
        }"
        :navigation="{
          nextEl: '.nft-next',
          prevEl: '.nft-prev'
        }"
        :breakpoints="{
          320: {
            slidesPerView: 2,
            spaceBetween: 19
          },
          567: {
            slidesPerView: 3,
            spaceBetween: 38
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 55
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 66
          }
        }"
        :pagination="{
          el: '.nft-pagination',
          clickable: true
        }"
      >
        <SwiperSlide>
          <a class="reset-link nft__link nft__link--blockparty" href="#">
            <img
              class=""
              src="../widgets/assets/images/nft/nft-market-logo-01.png"
              alt=""
            />
            <span>
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1277 9.00005C11.1277 9.32265 11.0045 9.64521 10.7587 9.89116L3.01901 17.6307C2.52668 18.1231 1.72843 18.1231 1.23629 17.6307C0.744153 17.1386 0.744152 16.3405 1.23629 15.8481L8.08478 9.00005L1.23653 2.15193C0.744391 1.65959 0.744391 0.861584 1.23653 0.369484C1.72867 -0.123093 2.52691 -0.123093 3.01925 0.369484L10.7589 8.10895C11.0048 8.35502 11.1277 8.67758 11.1277 9.00005Z"
                  fill="#4137D0"
                />
              </svg>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a class="reset-link nft__link nft__link--socialnft" href="#">
            <img
              class=""
              src="../widgets/assets/images/nft/nft-market-logo-02.png"
              alt=""
            />
            <span>
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1277 9.00005C11.1277 9.32265 11.0045 9.64521 10.7587 9.89116L3.01901 17.6307C2.52668 18.1231 1.72843 18.1231 1.23629 17.6307C0.744153 17.1386 0.744152 16.3405 1.23629 15.8481L8.08478 9.00005L1.23653 2.15193C0.744391 1.65959 0.744391 0.861584 1.23653 0.369484C1.72867 -0.123093 2.52691 -0.123093 3.01925 0.369484L10.7589 8.10895C11.0048 8.35502 11.1277 8.67758 11.1277 9.00005Z"
                  fill="#4137D0"
                />
              </svg>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a class="reset-link nft__link nft__link--airnfts" href="#">
            <img
              class=""
              src="../widgets/assets/images/nft/nft-market-logo-03.png"
              alt=""
            />
            <span>
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1277 9.00005C11.1277 9.32265 11.0045 9.64521 10.7587 9.89116L3.01901 17.6307C2.52668 18.1231 1.72843 18.1231 1.23629 17.6307C0.744153 17.1386 0.744152 16.3405 1.23629 15.8481L8.08478 9.00005L1.23653 2.15193C0.744391 1.65959 0.744391 0.861584 1.23653 0.369484C1.72867 -0.123093 2.52691 -0.123093 3.01925 0.369484L10.7589 8.10895C11.0048 8.35502 11.1277 8.67758 11.1277 9.00005Z"
                  fill="#4137D0"
                />
              </svg>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a class="reset-link nft__link nft__link--kbase" href="#">
            <img
              class=""
              src="../widgets/assets/images/nft/nft-market-logo-04.png"
              alt=""
            />
            <span>
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1277 9.00005C11.1277 9.32265 11.0045 9.64521 10.7587 9.89116L3.01901 17.6307C2.52668 18.1231 1.72843 18.1231 1.23629 17.6307C0.744153 17.1386 0.744152 16.3405 1.23629 15.8481L8.08478 9.00005L1.23653 2.15193C0.744391 1.65959 0.744391 0.861584 1.23653 0.369484C1.72867 -0.123093 2.52691 -0.123093 3.01925 0.369484L10.7589 8.10895C11.0048 8.35502 11.1277 8.67758 11.1277 9.00005Z"
                  fill="#4137D0"
                />
              </svg>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a class="reset-link nft__link nft__link--blockparty" href="#">
            <img
              class=""
              src="../widgets/assets/images/nft/nft-market-logo-01.png"
              alt=""
            />
            <span>
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1277 9.00005C11.1277 9.32265 11.0045 9.64521 10.7587 9.89116L3.01901 17.6307C2.52668 18.1231 1.72843 18.1231 1.23629 17.6307C0.744153 17.1386 0.744152 16.3405 1.23629 15.8481L8.08478 9.00005L1.23653 2.15193C0.744391 1.65959 0.744391 0.861584 1.23653 0.369484C1.72867 -0.123093 2.52691 -0.123093 3.01925 0.369484L10.7589 8.10895C11.0048 8.35502 11.1277 8.67758 11.1277 9.00005Z"
                  fill="#4137D0"
                />
              </svg>
            </span>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a class="reset-link nft__link nft__link--socialnft" href="#">
            <img
              class=""
              src="../widgets/assets/images/nft/nft-market-logo-02.png"
              alt=""
            />
            <span>
              <svg
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1277 9.00005C11.1277 9.32265 11.0045 9.64521 10.7587 9.89116L3.01901 17.6307C2.52668 18.1231 1.72843 18.1231 1.23629 17.6307C0.744153 17.1386 0.744152 16.3405 1.23629 15.8481L8.08478 9.00005L1.23653 2.15193C0.744391 1.65959 0.744391 0.861584 1.23653 0.369484C1.72867 -0.123093 2.52691 -0.123093 3.01925 0.369484L10.7589 8.10895C11.0048 8.35502 11.1277 8.67758 11.1277 9.00005Z"
                  fill="#4137D0"
                />
              </svg>
            </span>
          </a>
        </SwiperSlide>
      </Swiper>
      <div class="swiper-nav nft__navigation">
        <button class="reset-btn swiper-btn swiper-btn-prev nft-prev">
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
        <div class="swiper-pagination nft-pagination"></div>
        <button class="reset-btn swiper-btn swiper-btn-next nft-next">
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
.nft {
  position: relative;
  margin-bottom: 200px;

  &__bg {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: -1;
    margin-top: -30%;
    width: 100%;
    transform: translateX(-50%);
    // height: 1523px;
    aspect-ratio: 16 / 13.5;
  }

  &__heading {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(2, min-content);
    max-width: 1490px;
  }

  &__title {
    grid-area: 1 / 1;

    @media (min-width: 1400px) {
      margin-bottom: 33px;
    }
  }

  &__descr {
    grid-area: 2 / 1;
    font-weight: var(--font-medium);
    font-size: 20px;
    line-height: 1.6;
    color: #fff;

    @media (min-width: 1400px) {
      grid-area: 1 / 1;
      justify-self: end;
      padding-top: 70px;
      max-width: 71%;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  &__slider {
    height: 270px;
  }
  // &__list {
  //   display: flex;
  //   align-items: center;
  //   column-gap: 66px;
  //   padding-bottom: 225px;
  // }

  &__link {
    position: relative;
    display: grid;
    place-items: center;
    border-radius: 50%;
    padding-inline: 5px;
    border: 3px solid #232323;
    width: clamp(147px, 15vw, 236px);
    height: clamp(147px, 15vw, 236px);
    background-color: #fdfdfd;

    img {
      @media (max-width: 1400px) {
        object-fit: contain;
        max-inline-size: 100%;
        height: 70px;
        padding-inline: 10px;
      }
    }

    span {
      bottom: clamp(-21px, 6vw, -33px);
      position: absolute;
      display: grid;
      place-items: center;
      border-radius: 50%;
      border: 2px solid #4137d0;
      width: clamp(38px, 5vw, 60px);
      height: clamp(38px, 5vw, 60px);
      background-color: #fff;
      transition-property: background-color, box-shadow;
      transition-duration: 0.4s;
      transition-timing-function: ease-in-out;

      svg path {
        transition: fill 0.4s ease-in-out;
        fill: #4137d0;
      }
    }

    &:hover {
      span {
        box-shadow: 0px 8px 35px rgba(44, 35, 172, 0.4);
        background-color: #4137d0;

        svg path {
          fill: var(--color-white);
        }
      }
    }
  }
}
</style>

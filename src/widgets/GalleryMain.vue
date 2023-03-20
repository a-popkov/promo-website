<template>
  <section class="section gallery">
    <div class="container">
      <h2 class="section-title gallery__title">Gallery</h2>
    </div>
    <swiper
      :slides-per-view="5"
      :space-between="30"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        ><img src="../widgets/assets/images/gallery/pain-01.jpg" alt="" />
      </swiper-slide>
      <swiper-slide
        ><img src="../widgets/assets/images/gallery/pain-01.jpg" alt="" />
      </swiper-slide>
      <swiper-slide
        ><img src="../widgets/assets/images/gallery/pain-01.jpg" alt="" />
      </swiper-slide>
      <swiper-slide
        ><img src="../widgets/assets/images/gallery/pain-01.jpg" alt="" />
      </swiper-slide>
      <swiper-slide
        ><img src="../widgets/assets/images/gallery/pain-01.jpg" alt="" />
      </swiper-slide>
      <swiper-slide
        ><img src="../widgets/assets/images/gallery/pain-01.jpg" alt="" />
      </swiper-slide>
      <swiper-slide
        ><img src="../widgets/assets/images/gallery/pain-01.jpg" alt="" />
      </swiper-slide>
      <swiper-slide
        ><img src="../widgets/assets/images/gallery/pain-01.jpg" alt="" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Navigation, Pagination, A11y } from 'swiper'
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
      modules: [Navigation, Pagination, A11y]
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
  width: 100%;
  height: 817px;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}
</style>

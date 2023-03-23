<template>
  <div>
    <TheHeader />
    <HeroMain />
    <GalleryMain />
    <NewPainting />
    <PhilosophySection />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../widgets/TheHeader.vue'
import HeroMain from '../widgets/HeroMain.vue'
import GalleryMain from '../widgets/GalleryMain.vue'
import NewPainting from '../widgets/NewPainting.vue'
import PhilosophySection from '../widgets/PhilosophySection.vue'

export default {
  name: 'Main',
  components: {
    TheHeader,
    HeroMain,
    GalleryMain,
    NewPainting,
    PhilosophySection
  }
}
</script>

<style lang="scss" scoped></style>

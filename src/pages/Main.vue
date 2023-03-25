<template>
  <div>
    <TheHeader />
    <HeroMain />
    <GalleryMain />
    <NewPainting />
    <PhilosophySection />
    <NftMarketplace />
    <Exhibitions />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../widgets/TheHeader.vue'
import HeroMain from '../widgets/HeroMain.vue'
import GalleryMain from '../widgets/GalleryMain.vue'
import NewPainting from '../widgets/NewPainting.vue'
import PhilosophySection from '../widgets/PhilosophySection.vue'
import NftMarketplace from '../widgets/NftMarketplace.vue'
import Exhibitions from '../widgets/Exhibitions.vue'
import TheFooter from '../widgets/TheFooter.vue'

export default {
  name: 'Main',
  components: {
    TheHeader,
    HeroMain,
    GalleryMain,
    NewPainting,
    PhilosophySection,
    NftMarketplace,
    Exhibitions,
    TheFooter
  }
}
</script>

<style lang="scss" scoped></style>

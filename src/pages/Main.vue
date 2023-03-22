<template>
  <div>
    <TheHeader />
    <HeroMain />
    <GalleryMain />
    <NewPainting />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../widgets/TheHeader.vue'
import HeroMain from '../widgets/HeroMain.vue'
import GalleryMain from '../widgets/GalleryMain.vue'
import NewPainting from '../widgets/NewPainting.vue'

export default {
  name: 'Main',
  components: {
    TheHeader,
    HeroMain,
    GalleryMain,
    NewPainting
  }
}
</script>

<style lang="scss" scoped></style>

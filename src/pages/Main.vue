<template>
  <div>
    <TheHeader />
    <HeroMain />
    <GalleryMain />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../widgets/TheHeader.vue'
import HeroMain from '../widgets/HeroMain.vue'
import GalleryMain from '../widgets/GalleryMain.vue'

export default {
  name: 'Main',
  components: {
    TheHeader,
    HeroMain,
    GalleryMain
  }
}
</script>

<style lang="scss" scoped></style>

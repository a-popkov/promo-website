<template>
  <div>
    <TheHeader />
    <HeroBioPage />
    <PhilosophyTrend />
    <TheFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../widgets/TheHeader.vue'
import HeroBioPage from '../widgets/HeroBioPage.vue'
import PhilosophyTrend from '../widgets/PhilosophyTrend.vue'
import TheFooter from '../widgets/TheFooter.vue'

export default {
  name: 'Bio',
  components: {
    TheHeader,
    HeroBioPage,
    PhilosophyTrend,
    TheFooter
  }
}
</script>

<style lang="scss" scoped></style>

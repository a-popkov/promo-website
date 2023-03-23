<template>
  <section class="section new-painting">
    <div class="container">
      <h2 class="section-title section-title--center">New painting</h2>
      <CardPainting />
    </div>
  </section>
</template>

<script>
import CardPainting from './CardPainting.vue'

export default { components: { CardPainting } }
</script>

<style lang="scss" scoped>
.new-painting {
  .container {
    display: grid;
    place-items: center;
  }
}
</style>

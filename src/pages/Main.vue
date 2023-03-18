<template>
  <div>
    <TheHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../widgets/TheHeader.vue'

export default {
  name: 'Main',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss" scoped></style>

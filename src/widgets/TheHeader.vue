<template>
  <header class="header">
    <div class="container header__container">
      <LogoMain />
      <BaseNavigation />
    </div>
  </header>
</template>

<script setup>
import LogoMain from '../shared/components/Logo/LogoMain.vue'
import BaseNavigation from './BaseNavigation.vue'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding-block: 17px 18px;
  min-height: 80px;
  background-color: var(--color-grey-darker);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }
}
</style>

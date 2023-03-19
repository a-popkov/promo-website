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
  background-color: var(--color-grey-darker);

  &__container {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 50px);
  }

  @media (min-width: 1024px) {
    padding-block: 17px 18px;
  }

  @media (max-width: 1023px) {
    padding-block: 10px 14px;
  }

  @media (max-width: 675px) {
    padding-block: 4px 5px;
  }
}
</style>

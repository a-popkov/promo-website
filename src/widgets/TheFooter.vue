<template>
  <footer class="footer">
    <div class="container footer__container">
      <LogoMain />
      <SecondaryNavigation />
    </div>
    <div class="footer__police">
      <small>
        ⓒ 2022 all rights reserved
      </small>
    </div>
  </footer>
</template>

<script setup>
import LogoMain from '../shared/components/Logo/LogoMain.vue'
import SecondaryNavigation from './SecondaryNavigation.vue'
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--color-grey-darker);

  &__container {
    display: flex;
    align-items: center;
    gap: clamp(10px, 2vw, 50px);
    padding-block: 29px 26px;
  }

  @media (min-width: 1024px) {
  }

  @media (max-width: 1023px) {
    padding-block: 10px 14px;
  }

  @media (max-width: 675px) {
    padding-block: 4px 5px;
  }

  &__police {
    border-top: 2px solid rgba(255, 255, 255, 0.3);
    padding-block: 14px 8px;

    small {
      display: block;
      font-size: 14px;
      line-height: 1.14;
      text-align: center;
      color: #ffffff;
    }
  }
}
</style>

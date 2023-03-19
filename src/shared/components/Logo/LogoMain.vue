<template>
  <div>
    <img
      class="logo"
      src="@/shared/components/Logo/logo.svg"
      loading="lazy"
      alt="Logo Kate Kulish"
    />
  </div>
</template>

<script setup>
// import LogoMain
// export default { name: 'Logo', components: { LogoMain } }
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  width: clamp(207px, 34vw, 283px);

  @media (min-width: 1024px) {
    flex-shrink: 0;
  }
}
</style>

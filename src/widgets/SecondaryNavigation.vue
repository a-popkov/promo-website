<template>
  <nav class="nav">
    <ul v-show="!mobile" class="reset-list nav__list">
      <li class="nav__item">
        <router-link class="reset-link nav__link link" :to="{ name: 'Main' }"
          >Main
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="reset-link nav__link link" :to="{ name: '' }"
          >Gallery
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="reset-link nav__link link" :to="{ name: '' }"
          >Exhibitions
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="reset-link nav__link link" :to="{ name: '' }"
          >Bio
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="reset-link nav__link link" :to="{ name: '' }"
          >FAQ
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="reset-link nav__link link" :to="{ name: '' }"
          >Contacts
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="reset-link nav__link link" :to="{ name: '' }"
          >Auction
        </router-link>
      </li>
      <li class="nav__item">
        <router-link class="reset-link nav__link link" :to="{ name: '' }"
          >NFT
        </router-link>
      </li>
    </ul>
  </nav>
  <div class="nav-show">
    <ShopNavigation />
    <SocialList />
  </div>
</template>

<script>
import ShopNavigation from './ShopNavigation.vue'
import SocialList from './SocialList.vue'

export default {
  // name: 'navigation',
  // data () {
  //   return {
  //     mobile: null,
  //     mobileNav: null,
  //     windowWidth: null
  //   }
  // },
  // created () {
  //   window.addEventListener('resize', this.checkScreen)
  //   this.checkScreen()
  // },
  // methods: {
  //   toggleMobileNav () {
  //     this.mobileNav = !this.mobileNav
  //   },
  //   checkScreen () {
  //     this.windowWidth = window.innerWidth
  //     if (this.windowWidth <= 1450) {
  //       this.mobile = true
  //       return
  //     }
  //     this.mobile = false
  //     this.mobileNav = false
  //     return
  //   }
  // },
  components: { ShopNavigation, SocialList }
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &-show {
    display: flex;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: clamp(10px, 5vw, 32px);
    transition: var(--duration-normal) ease all;
    width: 100%;

    @media (min-width: 1450px) {
      align-items: center;
      justify-content: space-between;
    }
  }

  &__link {
    @media (min-width: 1450px) {
      font-weight: var(--font-semibold);
      font-size: 18px;
      line-height: 0.89;
      color: var(--color-white);
    }

    @media (max-width: 1450px) {
      font-size: 16px;
      line-height: 1.12;
      color: var(--color-grey-darker);
    }
  }
}
</style>

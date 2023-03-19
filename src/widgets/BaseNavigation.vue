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
    <transition name="mobile-nav">
      <ul v-show="mobileNav" class="reset-list nav-dropdown">
        <li class="nav__item">
          <router-link class="reset-link nav__link" :to="{ name: 'Main' }"
            >Main
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="reset-link nav__link" :to="{ name: '' }"
            >Gallery
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="reset-link nav__link" :to="{ name: '' }"
            >Exhibitions
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="reset-link nav__link" :to="{ name: '' }"
            >Bio
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="reset-link nav__link" :to="{ name: '' }"
            >FAQ
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="reset-link nav__link" :to="{ name: '' }"
            >Contacts
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="reset-link nav__link" :to="{ name: '' }"
            >Auction
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="reset-link nav__link" :to="{ name: '' }"
            >NFT
          </router-link>
        </li>
      </ul>
    </transition>
  </nav>
  <div class="nav-show">
    <ShopNavigation />
    <SocialList />
    <button
      @click="toggleMobileNav"
      v-show="mobile"
      class="reset-btn burger"
      :class="{ 'burger--active': mobileNav }"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.1667 10.8161H0.833333C0.373332 10.8161 0 10.4427 0 9.98275C0 9.52275 0.373332 9.14941 0.833333 9.14941H19.1667C19.6267 9.14941 20 9.52275 20 9.98275C20 10.4427 19.6267 10.8161 19.1667 10.8161Z"
          fill="white"
        />
        <path
          d="M19.1667 4.42692H0.833333C0.373332 4.42692 0 4.05359 0 3.59359C0 3.13359 0.373332 2.76025 0.833333 2.76025H19.1667C19.6267 2.76025 20 3.13359 20 3.59359C20 4.05359 19.6267 4.42692 19.1667 4.42692Z"
          fill="white"
        />
        <path
          d="M19.1667 17.2048H0.833333C0.373332 17.2048 0 16.8314 0 16.3714C0 15.9114 0.373332 15.5381 0.833333 15.5381H19.1667C19.6267 15.5381 20 15.9114 20 16.3714C20 16.8314 19.6267 17.2048 19.1667 17.2048Z"
          fill="white"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import ShopNavigation from './ShopNavigation.vue'
import SocialList from './SocialList.vue'

export default {
  name: 'navigation',
  data () {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    },
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 1450) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    }
  },
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

  &-dropdown {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    padding-block: 33px;
    padding-inline: 20px;
    width: 100%;
    max-width: 374px;
    height: 100%;
    background-color: var(--color-white);

    .nav__item {
      position: relative;
      padding-block: 11px 9px;
      padding-block: 17px 15px;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #f5f5f5;
      }
    }
  }

  &-show {
    display: flex;
  }

  &__list {
    display: flex;
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

.link {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -6px;
    border-radius: 50%;
    display: block;
    width: 5px;
    height: 5px;
    background-color: var(--color-white);
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
    opacity: 0;
    visibility: hidden;
  }
  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-375px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

.burger {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-inline-start: 36px;
  width: 46px;
  height: 46px;
  background-color: #4039a1;
  flex-shrink: 0;

  &--active {
    transform: rotate(180deg);
    transition: transform 1s ease;
  }

  &:is(:hover, :focus-visible) {
    background-color: #221b81;
  }
}
</style>

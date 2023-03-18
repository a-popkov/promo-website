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
    <div>
      <button v-show="mobile" class="btn-reset burger">
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
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    color: var(--color-white);
  }
}

.burger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  background-color: #4039a1;
  backdrop-filter: blur(2px);
}
</style>

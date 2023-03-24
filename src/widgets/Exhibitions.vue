<template>
  <section class="section exhibitions">
    <div class="container">
      <h2 class="section-title section-title--center exhibitions__title">
        Exhibitions
      </h2>
      <ul class="reset-list exhibitions__list">
        <li>
          <article class="card-exhibitions">
            <img
              class="reset-img card-exhibitions__img"
              loading="lazy"
              src="../widgets/assets/images/exhibitions/ex-img-01.jpg"
              alt=""
            />
            <div class="card-exhibitions__info">
              <h3 class="card-exhibitions__heading">
                International Symposium in Mallnitz, Austria
              </h3>
              <p class="card-exhibitions__descr">
                It so happened that I was not used to living without traveling,
                and since there are a lot…
              </p>
              <a class="reset-link card-exhibitions__link" href="#"
                >Continue reading
              </a>
            </div>
          </article>
        </li>
        <li>
          <article class="card-exhibitions">
            <img
              class="reset-img card-exhibitions__img"
              loading="lazy"
              src="../widgets/assets/images/exhibitions/ex-img-02.jpg"
              alt=""
            />
            <div class="card-exhibitions__info">
              <h3 class="card-exhibitions__heading">
                International Symposium in Mallnitz, Austria
              </h3>
              <p class="card-exhibitions__descr">
                It so happened that I was not used to living without traveling,
                and since there are a lot…
              </p>
              <a class="reset-link card-exhibitions__link" href="#"
                >Continue reading
              </a>
            </div>
          </article>
        </li>
        <li>
          <article class="card-exhibitions">
            <img
              class="reset-img card-exhibitions__img"
              loading="lazy"
              src="../widgets/assets/images/exhibitions/ex-img-03.jpg"
              alt=""
            />
            <div class="card-exhibitions__info">
              <h3 class="card-exhibitions__heading">
                International Symposium in Mallnitz, Austria
              </h3>
              <p class="card-exhibitions__descr">
                It so happened that I was not used to living without traveling,
                and since there are a lot…
              </p>
              <a class="reset-link card-exhibitions__link" href="#"
                >Continue reading
              </a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.exhibitions {
  &__title {
    margin-bottom: 43px;
  }

  &__list {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
}
.card-exhibitions {
  &__list {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }

  &__heading {
    margin-bottom: 4px;
    font-weight: var(--font-semibold);
    font-size: 25px;
    line-height: 1.4;
    text-transform: uppercase;
    color: #000;
  }

  &__descr {
    margin-bottom: 15px;
    font-size: 25px;
    line-height: 1.4;
    color: #000;
  }

  &__link {
    font-weight: var(--font-semibold);
    font-size: 20px;
    line-height: 1.5;
    text-transform: uppercase;
    color: #4137d0;
  }
}
</style>

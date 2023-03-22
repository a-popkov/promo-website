<template>
  <article class="card-painting">
    <img
      class="card-painting__img"
      loading="lazy"
      src="../widgets/assets/images/gallery/new-pain-01.jpg"
      alt=""
    />
    <div class="card-painting__descr">
      <h3 class="card-painting__name">
        Name of the painting
        <time datetime="2020-03-15">(15.03.2020)</time>
      </h3>
      <div class="card-painting__price">
        330.00 USD
      </div>
      <button class="reset-btn card-painting__buy" type="button">
        Buy
      </button>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss">
.card-painting {
  &__img {
    border: 3px solid #393939;
    margin-bottom: 33px;
    display: block;
    background-color: #c4c4c4;
  }
  &__descr {
    position: relative;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 2px;
      height: 23px;
      background-color: #3d3d3d;
      transform: translateX(-50%);
    }
  }

  &__name {
    margin-bottom: 25px;
    font-weight: 500;
    font-size: 30px;
    line-height: 1;
    text-align: center;
    color: #3d3d3d;
  }

  &__price {
    margin-bottom: 43px;
    font-weight: 600;
    font-size: 40px;
    line-height: 0.7;
    text-align: center;
    color: #3d3d3d;
  }

  &__buy {
    display: flex;
    align-self: center;
    padding: 20px 87px;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    text-align: center;
    text-transform: uppercase;
    color: var(--color-white);
    background-color: #4137d0;
  }
}
</style>

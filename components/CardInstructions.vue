<template>
  <div class="card">
    <img class="card__img gradient-bg" :src="img" alt="Instruction image" />
    <div class="card__info">
      <div class="card__info__header">
        <img
          class="card__info__header__icon"
          :src="icon"
          alt=""
        />
        <h3 class="card__info__header__title gradient-text">
          {{ index + '-' + title }}
        </h3>
      </div>
      <p class="card__info__text" v-text="text"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    img: String,
    icon: String,
    title: String,
    text: String,
  },
}
</script>

<style scoped>
.card {
  position: relative;
  width: 311px;
  height: 384px;
  background: transparent;
  border: 12px solid rgb(255, 255, 255);
  box-sizing: border-box;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
  border-radius: 32px;
}

.card::after {
  content: '';
  width: 311px;
  height: 384px;
  position: absolute;
  z-index: 1;
  top: -12px;
  left: -12px;
  right: 0px;
  bottom: 0px;
  border: 0.1px solid #dae4f2;
  border-radius: 32px;
}

.card__img {
  margin: 0 auto;
  height: 245px;
  width: 311px;
  border-radius: 20px 20px 0 0;
}

.card__info {
  background-color: #fff;
  width: 100%;
  height: 117px;
  border-radius: 0 0 24px 24px;
  padding: 16px 24px 24px 24px;
}

.card__info__header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
}

.card__info__header__icon {
  width: 40px;
}
.card__info__header__title {
  margin: 0;
}

.card__info__text {
  font-size: 14px;
}

@media (min-width: 1920px) {
  .card {
    height: 676px;
    width: 532px;
  }

  .card::after {
    height: 676px;
    width: 532px;
    top: -12px;
    left: -12px;
    right: 0px;
    bottom: 0px;
  }

  .card__img {
    height: 498px;
    width: 508px;
  }

  .card__info {
    width: 100%;
    height: 154px;
  }

  .card__info__text {
    max-width: 30ch;
    font-size: 18px;
  }
}
</style>
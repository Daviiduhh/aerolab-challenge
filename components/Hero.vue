<template>
  <section class="hero">
    <div class="hero__intro">
      <p class="hero__intro__subtitle">explore the</p>
      <h1 class="hero__intro__title gradient-text">
        tech <span class="hero__intro__title--span">zone</span>
      </h1>
      <p class="hero__intro__text">
        Here you'll be able to redeem all of your hard-earned Aeropoints and
        exchange them for cool tech.
      </p>
      <a class="hero__intro__button gradient btn" href="#store">
        <p class="hero__intro__button__text">view all products</p>
        <img
          class="hero__intro__button__arrow"
          src="../assets/icons/full-arrow.svg"
          alt="View all products icon"
        />
      </a>
    </div>
    <div class="hero__graph gradient-bg">
      <img
        class="hero__graph__img"
        src="../assets/illustrations/hero-responsive.svg"
        alt="Decoration img"
      />
      <div class="instructions">
        <CardInstructions />
        <CardInstructions />
        <CardInstructions />
      </div>
    </div>
  </section>
</template>

<script>
import CardInstructions from './CardInstructions.vue'

export default {
  components: {
    CardInstructions
  }
}
</script>

<style>
.hero__intro {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* Waves */
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
}

.hero__intro__subtitle {
  text-transform: uppercase;
  margin-bottom: 8px;
  line-height: 24px;
}

.hero__intro__title {
  text-align: center;
  margin-bottom: 24px;
}
.hero__intro__title--span {
  -webkit-text-fill-color: #252f3d;
}

.hero__intro__text {
  text-align: center;
  margin-bottom: 40px;
}

.hero__intro__button {
  height: 64px;
  padding: 20px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 120px;
}
.hero__intro__button__text {
  text-transform: uppercase;
  font-size: 16px;
  color: #fff;
}
.hero__intro__button--arrow {
  display: inline-block;
}

.hero__graph {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero__graph__img {
  margin-top: -120px;
  height: 540px;
  width: 100%;
  width: 540px;
  max-width: unset;
  overflow-x: hidden;
}

.instructions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-bottom: 32px;
}

</style>
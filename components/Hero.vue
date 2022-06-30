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
    <div class="hero__graph">
      <img
        class="hero__graph__img"
        src="../assets/illustrations/hero-responsive.svg"
        alt="Decoration img"
      />
      <Instructions class="v--mobile--flex" />
    </div>
    <Instructions class="hero__instructions v--desktop--flex gradient-bg" />
  </section>
</template>

<script>
import Instructions from './Instructions.vue'

export default {
  components: {
    Instructions,
  },
}
</script>

<style>
.hero {
  width: auto;
}

.hero__intro {
  width: auto;
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

.hero__intro__title {
  text-align: center;
  margin-bottom: 24px;
}
.hero__intro__title--span {
  -webkit-text-fill-color: #252f3d;
}

.hero__intro__subtitle {
  text-transform: uppercase;
  margin-bottom: 8px;
  line-height: 24px;
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

  background: rgb(114, 150, 235);
  background: -moz-linear-gradient(
    102deg,
    rgba(114, 150, 235, 1) 0%,
    rgba(234, 192, 233, 1) 100%
  );
  background: -webkit-linear-gradient(
    102deg,
    rgba(114, 150, 235, 1) 0%,
    rgba(234, 192, 233, 1) 100%
  );
  background: linear-gradient(
    102deg,
    rgba(114, 150, 235, 1) 0%,
    rgba(234, 192, 233, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7296eb",endColorstr="#eac0e9",GradientType=1);
}

.hero__graph__img {
  margin-top: -120px;
  height: 540px;
  width: 100%;
  width: 540px;
  max-width: unset;
  overflow-x: hidden;
}

.hero__instructions {
  grid-column: 1 / 3;
}

@media (min-width: 1920px) {
  .hero {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .hero__intro,
  .hero__graph {
    min-height: 800px;
  }

  .hero__intro {
    justify-self: start;
    margin-left: auto;
    width: 760px;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  .hero__intro__title {
    font-size: 200px;
    text-align: left;
  }
  .hero__intro__title--span {
    -webkit-text-fill-color: #252f3d;
  }

  .hero__intro__subtitle {
    font-size: 18px;
  }

  .hero__intro__text {
    width: 45ch;
    text-align: left;
    margin-bottom: 64px;
  }

  .hero__intro__button {
    height: 80px;
  }
  .hero__intro__button__text {
    font-size: 18px;
  }

  .hero__graph {
    background: #fff;
    background-color: #fff;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fff",endColorstr="#fff",GradientType=1);
  }

  .hero__graph__img {
    height: 795px;
    width: 897px;
  }
}
</style>
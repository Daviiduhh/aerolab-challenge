<template>
  <header class="header">
    <img
      class="header__logo"
      src="../assets/aerolab-logo.svg"
      alt="Logo aerolab"
    />
    <div class="header__points" @click="toggleCardPoints">
      <img
        class="header__points__logo"
        src="../assets/icons/aerolab-logo-white.svg"
        alt="Aerolab logo points"
      />
      <p class="header__points__points gradient-text">
        {{ $store.state.userInfo.points }}
      </p>
      <img
        class="header__points__arrow"
        src="../assets/icons/arrow-down.svg"
        alt="Arrow icon"
      />
    </div>
    <CardPoints v-show="mostrar == true" />
  </header>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false,
    }
  },
  methods: {
    toggleCardPoints() {
      this.mostrar = !this.mostrar
      console.log(this.mostrar)
    },
  },
  mounted() {
    console.log(this.$store.state.userInfo)
  },
}
</script>

<style>
.header {
  width: 100%;
  height: 128px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__points {
  width: 143px;
  height: 40px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  border: 1px solid #dae4f2;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header__points__logo {
  width: 24px;
  height: 24px;
}

.header__points__points {
  font-weight: 600;
}

.header__points__arrow {
  width: 15px;
  height: 7.5px;
}

@media (min-width: 1920px) {
  .header {
    max-width: 1464px;
    margin: 0 auto;
  }
}
</style>
<template>
  <div class="card" v-show="mostrar">
    <div class="card__top">
      <h4 class="card__top__title">Add Balance</h4>
      <img src="../assets/icons/arrow-up.svg" alt="Cerrar/Abrir menu">
    </div>
    <div class="card__bottom">
      <div class="card__card">
        <h4 class="card__card__title">Aerocard</h4>
        <img class="card__card__logo" src="../assets/icons/aeropay-2.svg" alt="Logo aerolab" />
        <h5 class="card__card__name">David Madrid</h5>
        <h5 class="card__card__date">01/25</h5>
      </div>
      <div class="card__points">
        <button class="btn selected gradient">1000</button>
        <button class="btn notselected">5000</button>
        <button class="btn notselected">7500</button>
      </div>

      <button class="card__add btn selected gradient">
        <img src="../assets/icons/aeropay-2.svg" alt="Logo aerolab points" />
        <p>Add Points</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false
    }
  },
  methods: {
    toggleMenu() {
      this.mostrar != this.mostrar
    }
  }
}
</script>

<style scoped>
.card {
  position: absolute;
  right: 20px;
  top: 20px;
}

.card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px 16px 0 0;
  border: 1px solid #dae4f2;
  width: 312px;
  background-color: #fff;
  padding: 16px 24px;
}

.card__top__title {
  font-weight: 600;
  font-size: 18px;
}

.card__bottom {
  border-radius: 0 0 16px 16px;
  border: 1px solid #dae4f2;
  width: 312px;
  background-color: #fff;
}

.card__card {
  margin: 24px auto;
  padding: 16px;
  border-radius: 8px;
  background-color: #252F3D;
  width: 264px;
  height: 148px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: start;
  align-items: flex-start;
}

.card__card__logo {
  width: 24px;
}

.card__card__name,
.card__card__date {
  align-self: flex-end;
}

.card__card__date,
.card__card__logo {
  justify-self: end;
}

.card__card__title,
.card__card__name,
.card__card__date {
  -webkit-text-fill-color: #f5f9ff; 
}

.card__points {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  margin: 0 auto;
  width: 264px;
}

.card__points button {
  width: 100%;
}

.card__add {
  margin: 24px auto;
  width: 264px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>
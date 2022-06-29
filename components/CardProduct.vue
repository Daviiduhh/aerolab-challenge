<template>
  <div class="card">
    <div class="card__top">
      <img class="card__img" :src="img" alt="Product image" />
    </div>
    <div class="card__bottom">
      <h3 class="card__title" v-text="name"></h3>
      <p class="card__text" v-text="category"></p>
    </div>
    <button
      class="card__btn btn"
      :class="requiredPoints ? 'gradient' : 'disabled'"
      @click="redeem"
    >
      <p v-text="redeemText"></p>
      <img
        :src="
          requiredPoints
            ? '/icons/aerolab-logo-white.svg'
            : '/icons/aerolab-logo-gray.svg'
        "
        alt="points icon"
      />
      <p v-text="amount"></p>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    async redeem() {
      if (this.requiredPoints) {
        const token =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVjYTNiNjVkMjlkMTAwMjEyNWNiYTkiLCJpYXQiOjE2NDI4OTgzNTh9.eytpINpi9hQeKNvSLo2nCYm-CjN0Y4nr6y6Iag3MKRQ'
        const res = await this.$axios.$post(
          'https://coding-challenge-api.aerolab.co/redeem',
          {
            productId: this._id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        if (res.success === 'false') {
          this.$emit('notify', '#E07F4F', '/icons/cross.svg', 'There was a problem with the transaction')
        } else {
          this.$emit('notify', '#29CC74', '/icons/tick.svg', this.name + ' redeemed successfully')
        }
      }
    },
    format(currency) {
      return currency.toFixed(0).replace(/\d(?=(\d{3}))/g, '$&,')
    },
  },
  computed: {
    requiredPoints() {
      return parseInt(this.$store.state.userInfo.points) >= parseInt(this.cost)
    },
    amount() {
      const points = this.$store.state.userInfo.points
      return  this.requiredPoints ? this.cost : this.cost - points
    },
    redeemText() {
      return this.requiredPoints ? 'Redeem for' : 'You need'
    },
  },
  props: {
    category: String,
    cost: Number,
    img: String,
    name: String,
    _id: String,
  },
}
</script>

<style scoped>
.card__top {
  height: 350px;
  width: 335px;
  border: 1px solid #dae4f2;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__bottom {
  height: 80px;
  width: 335px;
  border: 1px solid #dae4f2;
  border-top: 0px solid #dae4f2;
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.card__title,
.card__text {
  margin-left: 24px;
  font-weight: 600;
}

.card__title {
  font-size: 16px;
  text-transform: capitalize;
}

.card__text {
  font-size: 12px;
  text-transform: uppercase;
}

.card__btn {
  margin-top: 16px;
  width: 335px;
  height: 56px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

@media (min-width: 1024px) {
  .card__top {
    height: 350px;
    width: 311px;
  }

  .card__bottom {
    height: 80px;
    width: 311px;
  }

  .card__btn {
    width: 311px;
    height: 56px;
  }
}

@media (min-width: 1920px) {
  .card__top {
    height: 350px;
    width: 350px;
  }

  .card__bottom {
    height: 80px;
    width: 350px;
  }

  .card__btn {
    width: 350px;
    height: 56px;
  }
}
</style>
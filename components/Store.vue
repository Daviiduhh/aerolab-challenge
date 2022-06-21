<template>
  <section class="store contenedor" id="store">
    <header>
      <h2 class="store__title">
        <span class="gradient-text">tech</span> products
      </h2>
      <select class="filter" name="tags" id="tags">
        <option value="" selected>All products</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div class="sortby">
        <button
          class="btn"
          :class="order == 'original' ? 'selected gradient' : 'notselected'"
          @click="mostRecent"
        >
          Most recent
        </button>
        <button
          class="btn"
          :class="order == 'lowest' ? 'selected gradient' : 'notselected'"
          @click="lowest"
        >
          Lowest price
        </button>
        <button
          class="btn"
          :class="order == 'highest' ? 'selected gradient' : 'notselected'"
          @click="highest"
        >
          Highest price
        </button>
      </div>
    </header>
    <div class="products">
      <CardProduct
        v-for="product in products"
        :key="product._id"
        :category="product.category"
        :cost="product.cost"
        :img="product.img.url"
        :name="product.name"
        :_id="product._id"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      order: 'original',
    }
  },
  async fetch() {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWVjYTNiNjVkMjlkMTAwMjEyNWNiYTkiLCJpYXQiOjE2NDI4OTgzNTh9.eytpINpi9hQeKNvSLo2nCYm-CjN0Y4nr6y6Iag3MKRQ'
    this.products = await this.$axios.$get(
      'https://coding-challenge-api.aerolab.co/products',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  },
  methods: {
    lowest() {
      this.products.sort((a, b) => {
        return a.cost - b.cost
      })
      this.order = 'lowest'
    },
    highest() {
      this.products.sort((a, b) => {
        return b.cost - a.cost
      })
      this.order = 'highest'
    },
    mostRecent() {
      this.products.sort((a, b) => {
        let aId = a._id,
          bId = b._id

        if (aId < bId) {
          return -1
        }
        if (aId > bId) {
          return 1
        }
        return 0
      })
      this.order = 'original'
    },
  },
  mounted() {
    this.fetch
  },
}
</script>

<style>
.store__title {
  text-align: center;
  margin-bottom: 40px;
}

.filter {
  width: 100%;
  background-color: #fff;
  border: 1px solid #dae4f2;
  border-radius: 16px;
  padding: 16px 8px;
  font-weight: 600;
  margin-bottom: 24px;
}

.sortby {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;
  gap: 4px;
  overflow-x: scroll;
}

.sortby button {
  white-space: nowrap;
}

.products {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  gap: 48px;
}

@media (min-width: 1024px) {
  .filter {
    width: 256px;
  }

  .sortby {
    justify-content: flex-start;
    gap: 12px;
  }
  .sortby button {
    width: 165px;
  }

  .products {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 48px;
    column-gap: 24px;
  }
}

@media (min-width: 1920px) {
  .products {
    width: 80%;
    margin: 0 auto;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 80px;
  }
}
</style>
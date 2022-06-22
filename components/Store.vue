<template>
  <section class="store contenedor" id="store">
    <header>
      <h2 class="store__title">
        <span class="gradient-text">tech</span> products
      </h2>
      <div class="options">
        <div class="options__filter">
          <p>Filter by:</p>

          <select class="filter" name="tags" id="tags">
            <option value="" selected>All products</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="sortby">
          <p>Sort by:</p>
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
        <Pagination
          :pages="pages"
          :page="page"
          @increase="increase"
          @decrease="decrease"
        />
      </div>
    </header>
    <div class="products">
      <!-- 
        <CardProduct
        v-for="product in products"
        :key="product._id"
        :category="product.category"
        :cost="product.cost"
        :img="product.img.url"
        :name="product.name"
        :_id="product._id"
      /> 
      -->
      <CardProduct
        v-for="(product, index) in productsAux"
        :key="product.id"
        :category="products[start + index].category"
        :cost="products[start + index].cost"
        :img="products[start + index].img.url"
        :name="products[start + index].name"
        :_id="products[start + index]._id"
      />
    </div>
    <Pagination
      :pages="pages"
      :page="page"
      @increase="increase"
      @decrease="decrease"
    />
  </section>
</template>

<script>
import Pagination from './Pagination.vue'

export default {
  data() {
    return {
      productsAux: ['', '', '', '', '', '', '', ''],
      products: [],
      productsLenght: 0,
      order: 'original',
      start: 0,
      page: 1,
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

    this.productsLenght = this.products.length
  },
  computed: {
    pages() {
      return this.productsLenght / 8
    },
    numberOfProducts() {
      return start + 8;
    }
  },
  methods: {
    decrease() {
      this.page--
      this.start = (this.page - 1) * 8
      this.$emit('numberOfProducts', this.start + 8)
    },
    increase() {
      this.page++
      this.start = (this.page - 1) * 8
      this.$emit('numberOfProducts', this.start + 8)
    },
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
.pagination {
  display: none;
}

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
  .store__title {
    width: 80%;
    margin: 170px auto 0 auto;
    font-size: 48px;
  }

  .pagination {
    margin: 0 auto;
    display: flex;
  }

  .options {
    width: 80%;
    margin: 70px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .options__filter {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .filter {
    margin: 0;
  }

  .sortby {
    overflow-x: hidden;
    margin: 0;
  }

  .store__title {
    text-align: left;
  }

  .products {
    width: 80%;
    margin: 0 auto 70px auto;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 80px;
  }
}
</style>
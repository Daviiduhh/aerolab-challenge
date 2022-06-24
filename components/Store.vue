<template>
  <section class="store contenedor" id="store">
    <header>
      <h2 class="store__title">
        <span class="gradient-text">tech</span> products
      </h2>
      <div class="options">
        <div class="options__filter">
          <p>Filter by:</p>

          <select class="filter" v-model="filter" name="tags" id="tags">
            <option value="all" selected="true">All products</option>
            <option value="Gaming">Gaming</option>
            <option value="Audio">Audio</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Monitors & TV">Monitors & TV</option>
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
        :category="filteredProducts[start + index].category"
        :cost="filteredProducts[start + index].cost"
        :img="filteredProducts[start + index].img.url"
        :name="filteredProducts[start + index].name"
        :_id="filteredProducts[start + index]._id"
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
export default {
  data() {
    return {
      products: [],
      productsLenght: 0,
      order: 'original',
      start: 0,
      page: 1,
      filter: 'all',
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

    this.productsLenght = this.filteredProducts.length
  },
  computed: {
    filteredProducts() {
      if (this.filter == 'all') {
        return this.products
      }
      return this.products.filter((product) => {
        if (product.category === this.filter) {
          console.log(product)
          return product
        }
      })
    },
    productsAux() {
      if (this.filteredProducts.length >= 8) {
        return ['', '', '', '', '', '', '', '']
      }

      const array = []
      for (let index = 0; index < this.filteredProducts.length; index++) {
        array.push('')
      }
      return array
    },
    pages() {
      return this.productsLenght / 8
    },
    numberOfProducts() {
      return start + 8
    },
  },
  methods: {
    decrease() {
      this.page > 1 ? this.page-- : (this.page = this.page)
      this.start = (this.page - 1) * 8
      this.$emit('numberOfProducts', this.start + 8)
    },
    increase() {
      this.page < this.pages ? this.page++ : (this.page = this.page)
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
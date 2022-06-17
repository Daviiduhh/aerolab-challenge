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
        <button class="btn selected gradient">Most recent</button>
        <button class="btn notselected">Lowest price</button>
        <button class="btn notselected">Highest price</button>
      </div>
    </header>
    <div class="products">
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  </section>
</template>

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
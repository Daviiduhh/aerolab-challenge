<template>
  <div class="pagination">
    <button class="pagination__btn btn">
      <img
        src="../assets/icons/chevron-defaultL.svg"
        alt="Decrease pagination"
      />
    </button>
    <p>Page <span class="gradient-text">1 of 4</span></p>
    <button class="pagination__btn btn">
      <img
        src="../assets/icons/chevron-defaultR.svg"
        alt="Increase pagination"
      />
    </button>
  </div>
</template>

<style>
.pagination {
  margin: 60px auto 0 auto;
  width: 250px;
  height: 56px;
  border-radius: 16px;
  border: 1px solid #dae4f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 0 15px;
}

.pagination__btn {
  width: 36px;
  height: 36px;
  background-color: #e5f0ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
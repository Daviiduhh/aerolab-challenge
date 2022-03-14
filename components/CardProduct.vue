<template>
    <div class="card">
        <div class="card__top">
            <img class="card__img" src="../assets/product-pics/AcerAspire-x1.png" alt="Product image">
        </div>
        <div class="card__bottom">
            <h3 class="card__title">Go Pro Hero 4</h3>
            <p class="card__text">Cameras</p>
        </div>
        <button class="card__btn btn gradient">
            <p>Redeem for</p>
            <img src="../assets/icons/aerolab-logo-white.svg" alt="points icon">
            <p>12.500</p>
        </button>
    </div>
</template>

<style scoped>
.card__top {
    height: 350px;
    width: 335px;
    border: 1px solid #DAE4F2;
    border-radius: 16px 16px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card__bottom {
    height: 80px;
    width: 335px;
    border: 1px solid #DAE4F2;
    border-top: 0px solid #DAE4F2;
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
</style>
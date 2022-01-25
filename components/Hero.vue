<template>
    <section class="hero contenedor">
        <p class="hero__subtitle">explore the</p>
        <h1 class="hero__title gradient-text">tech <span class="hero__title--span">zone</span></h1>
        <p class="hero__text">Here you'll be able to redeem all of your hard-earned Aeropoints and exchange them for cool tech.</p>
        <button class="hero__button gradient btn">
            <p class="hero__button__text">view all products</p>
            <img class="hero__button__arrow" src="../assets/icons/full-arrow.svg" alt="View all products icon">
        </button>
    </section>
</template>

<style>
.hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    /* Waves */
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;
}

.hero__subtitle {
    text-transform: uppercase;
    margin-bottom: 8px;
    line-height: 24px;
}

.hero__title {
    text-align: center;
    margin-bottom: 24px;
}
.hero__title--span {
    -webkit-text-fill-color: #252f3d;
}

.hero__text {
    text-align: center;
    margin-bottom: 40px ;
}

.hero__button {
    height: 64px;
    padding: 20px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
.hero__button__text {
    text-transform: uppercase;
    font-size: 16px;
    color: #fff;
}
.hero__button--arrow {
    display: inline-block;
}
</style>
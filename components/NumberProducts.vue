<template>
    <div class="numberproducts contenedor">
        <p><span class="gradient-text">{{ `${numberOfProducts} of 32` }}</span> products</p>
    </div>
</template>

<script>
export default {
    props: {
        numberOfProducts: Number
    }
}
</script>

<style>
.numberproducts {
    text-align: center;
}
</style>
<template>
  <div class="instructions">
    <CardInstructions class="rotate--left"/>
    <CardInstructions />
    <CardInstructions class="rotate--right"/>
  </div>
</template>

<script>
import CardInstructions from './CardInstructions.vue'

export default {
  components: {
    CardInstructions,
  },
}
</script>

<style>
.instructions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-bottom: 32px;
}

@media (min-width: 1024px) {
  .instructions {
    flex-direction: row;
    gap: 8px;
  }
}


@media (min-width: 1920px) {
    .instructions {
      height: 528px;
    }

    .rotate--left {
        transform: rotate(-3deg);
    }
    .rotate--right {
        transform: rotate(3deg);
    }
}
</style>
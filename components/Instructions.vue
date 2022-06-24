<template>
  <div class="instructions">
    <CardInstructions class="rotate--left" />
    <CardInstructions class="center" />
    <CardInstructions class="rotate--right" />
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
  position: relative;
}

@media (min-width: 1024px) {
  .instructions {
    flex-direction: row;
    gap: 8px;
  }
}

@media (min-width: 1920px) {
  .instructions {
    width: 100%;
    height: 528px;
  }

  .center {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
  }
  .rotate--left {
    transform: rotate(-3deg);
    position: absolute;
    left: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }
  .rotate--right {
    transform: rotate(3deg);
    position: absolute;
    right: 500px;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
  }
}
</style>
<template>
  <div class="instructions">
    <CardInstructions
      v-for="(instruct, index) in instructions"
      :key="instruct.id"
      :index="index + 1"
      :img="instruct.img"
      :icon="instruct.icon"
      :title="instruct.title"
      :text="instruct.text"
      :class="instruct.class"
    />
  </div>
</template>

<script>
import CardInstructions from './CardInstructions.vue'

export default {
  data() {
    return {
      instructions: [
        {
          img: '/instructions/browse.png',
          icon: '/instructions/browseIcon.png',
          title: 'Browse',
          text: 'Browse our tech catalog with more than 20 top tech products',
          class: 'rotate--left',
        },
        {
          img: '/instructions/choose.png',
          icon: '/instructions/chooseIcon.png',
          title: 'Choose',
          text: 'Exchange your hard earned AeroPoints for the item you want',
          class: 'center',
        },
        {
          img: '/instructions/enjoy.png',
          icon: '/instructions/enjoyIcon.png',
          title: 'Enjoy!',
          text: 'All done, you can relax! We’ll take care of delivery of your tech item!',
          class: 'rotate--right',
        },
      ],
    }
  },
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
    display: block;
    width: 100%;
    height: 528px;
  }

  .center {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    z-index: 2;
  }
  .rotate--left {
    transform: rotate(-3deg);
    position: absolute;
    left: 190px;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }
  .rotate--right {
    transform: rotate(3deg);
    position: absolute;
    right: 190px;
    margin-left: auto;
    margin-right: auto;
    z-index: 3;
  }
}
</style>
<template>
  <div v-show="show" class="notification" :style="`border: 2px solid ${color}`">
    <img :src="icon" alt="message" />
    <span v-text="message"></span>
    <img
      src="/icons/cross-gray.svg"
      alt="Delete notification"
      @click="$emit('deleteNotification', index)"
    />
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      show: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = false
      this.$emit('deleteNotification', index)
    }, 7000)
  },
  props: {
    message: String,
    icon: String,
    color: String,
    index: Number
  },
}
</script>

<style scoped>
.notification {
  width: 532px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 0 27px;
}

span {
  font-weight: 600;
  font-size: 18px;
}
</style>
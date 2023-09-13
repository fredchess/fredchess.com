<script setup>
defineProps({
  text: String,
  action: Function,
  transparent: Boolean,
  link: String
})
</script>

<template>
  <a :href="link">
    <button
      class="simple-btn px-5 py-2 font-bold mt-5 bg-important text-black flex space-x-4 justify-center items-center"
      :class="{ 'bg-transparent border-important border-2 text-important': transparent }"
      @click="action"
    >
      <span>{{ text }}</span>
      <slot></slot>
    </button>
  </a>
</template>

<style scoped>
.simple-btn {
}
</style>

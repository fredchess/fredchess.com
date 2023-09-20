<script setup>
import { ref } from 'vue'
import animationData from '../assets/loader.json'
import { useLoader } from '../stores/loader'

const loaderStore = useLoader()

const loader = ref(null)

function complete() {
  setTimeout(() => {
    loader.value.destroy()
    loaderStore.changeLoading(false)
  }, 200)
}
</script>

<template>
  <div
    ref="loader-container"
    class="loader-container fixed top-0 left-0 h-screen w-screen bg-appbg flex items-center justify-center"
  >
    <vue3Lottie
      ref="loader"
      :animation-data="animationData"
      :speed="2"
      :loop="false"
      :width="450"
      :delay="1000"
      @onComplete="complete"
    />
  </div>
</template>

<style scoped></style>

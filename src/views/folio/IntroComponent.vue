<script setup>
import SimpleButton from '../../components/buttons/SimpleButton.vue'
</script>

<template>
  <section class="intro flex flex-col items-start justify-center space-y-2">
    <div class="relative">
      <span class="text-2xl font-bold" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :delay="1000">Hello 👋, I’m</span>
      <h2 class="text-[clamp(3rem,3vw,5rem)] font-bold text-important" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :delay="1000*1.05">Frederick Essono.</h2>
      <h3 class="text-[clamp(2rem,3vw,3rem)] font-bold" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :delay="1000*1.1">A profesionnal Full stack developer.</h3>
      <span class="text-xl block text-appgray mt-5" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :delay="1000*1.15">
        I create meaningful solutions for your brands and give your customers the best experience
        possible.</span
      >
      <SimpleButton :text="'Pull my CV'" :transparent="true" v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :delay="1000*1.2">
        <font-awesome-icon icon="fa-regular fa-file" class="text-important" />
      </SimpleButton>
    </div>
  </section>
</template>

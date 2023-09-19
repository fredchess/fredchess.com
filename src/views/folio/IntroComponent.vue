<script setup></script>

<template>
  <section class="intro flex flex-col items-start justify-center space-y-2">
    <div class="relative">
      <span
        class="text-2xl font-bold"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :delay="1500"
        >Hello 👋, I’m</span
      >
      <h2
        class="text-5xl md:text-7xl font-bold text-important"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :delay="1500 * 1.05"
      >
        Frederick Essono.
      </h2>
      <h3
        class="text-3xl md:text-5xl font-bold"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :delay="1500 * 1.1"
      >
        A profesionnal Full stack developer.
      </h3>
      <span
        class="text-lg block text-appgray mt-5 w-full sm:w-2/3"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :delay="1500 * 1.15"
      >
        I create meaningful solutions for your brands and give your customers the best experience
        possible.</span
      >
      <button
        class="btn bg-transparent hover:bg-important border-2 border-important text-important hover:text-black px-5 py-3 flex justify-between items-center space-x-3 mt-7"
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1 }"
        :delay="1500 * 1.20"
      >
        <span class="font-bold">Pull my CV</span>
        <font-awesome-icon icon="fa-regular fa-file" class="" />
      </button>
    </div>
  </section>
</template>

<style scoped>
button {
  stroke: #64ffda;
  transition: all 0.3s ease-in-out;
}

button:hover {
  stroke: black;
}
</style>

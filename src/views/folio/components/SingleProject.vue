<script setup>
defineProps({
  id: Number,
  name: String,
  description: String,
  live_link: String,
  git_link: String,
  image: String,
  used_technos: Array
})
</script>

<template>
  <div :class="`bg-[url('/images/projects/project-1.png')] sm:bg-none`">
  <!-- <div :class="`sm:bg-none`" :style="`background-image: url('${image}')`"> -->
    <div
      class="project_card sm:bg-transparent justify-between items-center flex mb-24 sm:mb-12 px-8 py-7 sm:p-0 backdrop-filter backdrop-brightness-[10%] backdrop-contrast-100 sm:backdrop-filter-none"
      :class="{ 'flex-row-reverse': id % 2 == 0 }"
    >
      <div class="project_desc w-full sm:w-[45%]">
        <div class="title text-important text-4xl mb-5 font-bold">
          <a :href="live_link">{{ name }}</a>
        </div>
        <div class="description text-sm text-justify text-appgray">{{ description }}</div>
        <div class="techs flex flex-col my-7">
          <span class="font-bold mb-4">Technos used: </span>
          <div class="technos_container flex space-x-5">
            <img
              class="w-[35px]"
              :src="tech.image"
              :alt="tech.name"
              :title="tech.name"
              v-for="(tech, idx) in used_technos"
              :key="idx"
            />
          </div>
        </div>
        <div class="buttons flex space-x-5 items-center justify-start">
          <div
            class="btn text-important py-3 px-5 w-max border-important border font-bold flex space-x-2 cursor-pointer"
          >
            <span>Live project</span>
            <span>
              <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" />
            </span>
          </div>
          <div class="github cursor-pointer">
            <font-awesome-icon icon="fab fa-github" class="fa-2x text-important" />
          </div>
        </div>
      </div>
      <div class="project_image w-full sm:w-[50%] relative hidden sm:block">
        <img :src="image" alt="" />
        <div
          class="absolute top-0 bottom-0 left-0 right-0 w-full bg-important opacity-30 hover:opacity-0 transition-all"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .project_card {
    /* backdrop-filter: grayscale(100%) contrast(1) brightness(10%); */
  }
</style>

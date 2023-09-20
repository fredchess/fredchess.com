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
  <div class="container" :style="{ 'background-image': 'url(' + image + ')' }">
    <div
      class="project_card sm:bg-transparent justify-between items-center flex mb-24 sm:mb-12 px-8 py-7 sm:p-0 backdrop-filter backdrop-brightness-[10%] backdrop-contrast-100 sm:backdrop-filter-none"
      :class="{ 'flex-row-reverse': id % 2 == 0 }"
    >
      <div class="project_desc w-full sm:w-[45%]">
        <div class="title text-important text-2xl sm:text-4xl mb-5 font-bold">
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
          <a :href="live_link">
            <button
              class="btn bg-transparent hover:bg-important border-2 border-important text-important hover:text-black px-5 py-3 flex justify-between items-center space-x-3"
            >
              <span class="font-bold">Live project</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15L15 5"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.875 5L15 5L15 13.125"
                  stroke=""
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </a>
          <div class="github cursor-pointer" :class="{ 'hidden': git_link.length == 0 }">
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
@media (min-width: 640px) {
  .container {
    background-image: none !important;
  }
}

button {
  stroke: #64ffda;
  transition: all 0.3s ease-in-out;
}

button:hover {
  stroke: black;
}
</style>

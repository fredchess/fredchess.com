<script setup></script>

<template>
  <section
    class="contact min-h-[50vh] mb-7"
    id="contact"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div class="container flex flex-col space-y-10 justify-center items-center text-center">
      <h2 class="message text-[clamp(2rem,4vw,4rem)] font-bold my-7 sm:leading-loose">
        Have a project in mind? Let’s get to work.👋📫
      </h2>
      <button
        class="btn bg-transparent hover:bg-important border-2 border-important text-important hover:text-black px-5 py-3 flex justify-between items-center space-x-3"
      >
        <span class="font-bold">Say hello</span>
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

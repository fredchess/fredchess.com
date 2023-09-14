<script setup>
</script>

<template>
  <div class="navbar flex justify-between items-center py-5 px-11 border-bottom-gradient w-[99%] m-auto">
    <a href="#">
      <div class="logo w-[clamp(8rem,12vw,12rem)]">
        <img src="/images/logo_fredchess.svg" alt="" />
      </div>
    </a>
    <div class="links space-x-5 hidden sm:flex">
      <a href="#" class="link">About</a>
      <a href="#experience" class="link">Experience</a>
      <a href="#projects" class="link">Projects</a>
      <a href="#contact" class="link">Contact</a>
      <a href="#blogs" class="link">Blogs</a>
    </div>
    <div class="burger-btn sm:hidden block cursor-pointer" @click="$emit('showSidebar')">
      <font-awesome-icon icon="fa-solid fa-bars-staggered" class="text-important fa-2x"/>
    </div>
  </div>
</template>

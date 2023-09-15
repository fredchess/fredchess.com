<script setup>
const emit = defineEmits(['toggleSidebar']);
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('openmenu')

  emit('toggleSidebar')
}
</script>

<template>
  <div
    class="navbar flex justify-between items-center py-5 px-5 border-bottom-gradient w-[99%] m-auto"
  >
    <a href="#">
      <div class="logo w-[clamp(8rem,12vw,12rem)]">
        <img src="/images/logo_fredchess.svg" alt="" />
      </div>
    </a>
    <div class="links space-x-5 hidden sm:flex">
      <a href="#about" class="link">
        <span>About</span>
      </a>
      <a href="#experience" class="link">
        <span>Experience</span>
      </a>
      <a href="#projects" class="link">
        <span>Projects</span>
      </a>
      <a href="#contact" class="link">
        <span>Contact</span>
      </a>
      <a href="#blogs" class="link">
        <span>Blogs</span>
      </a>
    </div>
    <div class="menu sm:hidden z-10" @click="toggleMenu">
      <div>
        <span class="line-1"></span>
        <span class="line-2"></span>
        <span class="line-3"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* .navbar {
  position: fixed;
  backdrop-filter: blur(50px) brightness(.7);
  z-index: 3;
  top: 0;
  width: 100%;
} */
.menu {
  width: 2.5rem;
  height: 2.5rem;
  margin: 8px;
  border-radius: 5px;
  cursor: pointer;
}

.menu div {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.menu span {
  background: linear-gradient(to right, #64ffda 0%, #1e3c72 100%);
  width: 100%;
  height: 2.5px;
  border-radius: 5px;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition:
    transform 0.5s,
    width 0.5s;
}

.menu .line-1 {
  transform: translate(-50%, -12px);
}

.menu .line-3 {
  transform: translate(-50%, 10px);
}

.openmenu .line-1 {
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 100%;
}

.openmenu .line-3 {
  transform: translate(-50%, -50%) rotate(45deg);
  width: 100%;
}

.openmenu .line-2 {
  width: 0;
}
</style>

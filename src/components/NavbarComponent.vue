<script setup>
import { useRoute } from 'vue-router'
import { useSidebar } from '../stores/sidebar'
import { onMounted } from 'vue'

const sidebarStore = useSidebar()
const route = useRoute()
function toggleMenu() {
  sidebarStore.toggleSidebar()
}

onMounted(() => {
  setTimeout(() => {
    document.querySelector('.navbar-border').classList.add('border-bottom-gradient')
  }, 200 * 5)
})
</script>

<template>
  <div
    class="navbar sticky top-0 py-3 sm:py-5 px-5 w-[99%] m-auto z-10 overflow-hidden bg-appbg bg-opacity-30 backdrop-filter backdrop-blur-lg"
  >
    <div class="flex justify-between items-center">
      <a href="#">
        <div
          class="logo w-[clamp(8rem,12vw,12rem)]"
          v-motion
          :initial="{ opacity: 0, y: -20 }"
          :enter="{ opacity: 1, y: 0 }"
          :delay="200 * 1"
        >
          <img src="/images/logo_fredchess.svg" alt="" />
        </div>
      </a>
      <div class="links space-x-5 hidden sm:flex">
        <a
          href="#about"
          class="link"
          :class="{ selected: route.fullPath.includes('about') }"
        >
          <span
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200 * 1"
            >About</span
          >
        </a>
        <a
          href="#experience"
          class="link"
          :class="{ selected: route.fullPath.includes('experience') }"
        >
          <span
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200 * 1.6"
            >Experience</span
          >
        </a>
        <a
          href="#projects"
          class="link"
          :class="{ selected: route.fullPath.includes('projects') }"
        >
          <span
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200 * 2.2"
            >Projects</span
          >
        </a>
        <a
          href="#contact"
          class="link"
          :class="{ selected: route.fullPath.includes('contact') }"
        >
          <span
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200 * 2.8"
            >Contact</span
          >
        </a>
        <a href="https://blog.fredchess.com" class="link">
          <span
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200 * 3.4"
            >Blogs</span
          >
        </a>
      </div>
      <div
        class="menu sm:hidden z-10"
        @click="toggleMenu"
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0 }"
        :delay="200 * 1"
      >
        <div>
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
        </div>
      </div>
    </div>
  </div>
  <div class="navbar-border"></div>
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

.navbar-border {
  width: 10%;
  transition: width 1s;
}

@media screen and (max-width: 640px) {
  .navbar-border { transition: width 200ms; }
}

.navbar-border.border-bottom-gradient {
  width: 99%;
}

.menu div {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
}

.menu span {
  /* background: linear-gradient(to right, #64ffda 0%, #1e3c72 50%, #64ffda 100%); */
  background-color: #64ffda;
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

.openmenu span {
  background: linear-gradient(to right, #64ffda 0%, #1e3c72 50%, #64ffda 100%);
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

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <aside class="sidebar-menu hidden flex flex-col justify-center items-center">
    <nav class="menu flex flex-col m-auto text-2xl">
      <a href="#" class="link py-3 selected">
        <span>About</span>
      </a>
      <a href="#experience" class="link py-3">
        <span>Experience</span>
      </a>
      <a href="#projects" class="link py-3">
        <span>Projects</span>
      </a>
      <a href="#contact" class="link py-3">
        <span>Contact</span>
      </a>
      <a href="#blogs" class="link py-3">
        <span>Blogs</span>
      </a>
    </nav>
    <div class="socials flex items-center justify-center space-x-5">
        <a href="https://github.com/frede" target="_blank">
            <font-awesome-icon icon="fab fa-github" class="fa-xl hover:text-important" />
        </a>
        <a href="https://www.linkedin.com/in/frede-chess/" target="_blank">
            <font-awesome-icon icon="fab fa-linkedin-in" class="fa-xl hover:text-important" />
        </a>
        <a href="https://twitter.com/fredechess" target="_blank">
            <font-awesome-icon icon="fab fa-twitter" class="fa-xl hover:text-important" />
        </a>
        <a href="https://www.instagram.com/fredechess/" target="_blank">
            <font-awesome-icon icon="fab fa-instagram" class="fa-xl hover:text-important" />
        </a>
      </div>
  </aside>
</template>

<style scoped>
.sidebar-menu {
  width: min(75vw, 400px);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 6;
  background-color: #2d2749;
  padding: 1rem .75rem;
  /* transform: translateX(450px); */
  transition: transform .5s;
  margin: 0;
}
</style>

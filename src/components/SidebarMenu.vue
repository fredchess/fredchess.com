<script setup></script>

<template>
  <aside class="sidebar-menu flex flex-col justify-center items-center">
    <nav class="menu flex flex-col m-auto text-2xl space-y-5">
      <a href="#" class="link">About</a>
      <a href="#experience" class="link">Experience</a>
      <a href="#projects" class="link">Projects</a>
      <a href="#contact" class="link">Contact</a>
      <a href="#blogs" class="link">Blogs</a>
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
  margin: 0;
}
</style>

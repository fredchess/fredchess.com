<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import IntroComponent from './views/folio/IntroComponent.vue'
import AboutComponent from './views/folio/AboutComponent.vue'
import PowersComponent from './views/folio/PowersComponent.vue'
import ExperiencesComponent from './views/folio/ExperiencesComponent.vue'
import ProjectComponent from './views/folio/ProjectComponent.vue'
import OtherProjects from './views/folio/OtherProjects.vue'
import ContactComponent from './views/folio/ContactComponent.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import { ref } from 'vue'
// import {inject} from '@vercel/analytics'

const SidebarVisible = ref(false)

function toggleSidebar() {
  SidebarVisible.value = !SidebarVisible.value

  document.querySelector('body')?.classList.toggle('blurred')
  document.querySelector('.overlay')?.classList.toggle('hidden')
}

// inject()
</script>

<template>
  <div class="content">
    <NavbarComponent @toggleSidebar="toggleSidebar" />
    <div class="main" @click="hideSidebar">
      <IntroComponent />
      <AboutComponent />
      <PowersComponent />
      <ExperiencesComponent />
      <ProjectComponent />
      <OtherProjects />
      <ContactComponent />
    </div>
    <FooterComponent />
  </div>
  <SidebarMenu
    :class="{ show: SidebarVisible, hidden: !SidebarVisible }"
  />
</template>

<style scoped>
</style>

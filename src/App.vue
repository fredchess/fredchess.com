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
import { onMounted } from 'vue'
import { useSidebar } from './stores/sidebar'

const sidebarStore = useSidebar()

onMounted(() => {
  // On overlay click
  document.querySelector('.overlay')?.addEventListener('click', sidebarStore.closeSidebar)

  // On link click
  document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('click', () => {
      sidebarStore.closeSidebar()
    })
  })
})

// inject()
</script>

<template>
  <div class="content">
    <NavbarComponent/>
    <div class="main">
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
  <SidebarMenu />
</template>

<style scoped></style>

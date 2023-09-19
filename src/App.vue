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
import LoaderComponent from './components/LoaderComponent.vue'
import SidebarMenu from './components/SidebarMenu.vue'
import { onMounted } from 'vue'
import { useSidebar } from './stores/sidebar'
import { useLoader } from './stores/loader'

import AOS  from 'aos';
import 'aos/dist/aos.css';

const sidebarStore = useSidebar()
const loaderStore = useLoader()

onMounted(() => {
  // Init AOS
  AOS.init()
  // On overlay click
  document.querySelector('.overlay')?.addEventListener('click', sidebarStore.closeSidebar)

  // On link click
  document.querySelectorAll('.link').forEach((link) => {
    link.addEventListener('click', () => {
      sidebarStore.closeSidebar()
    })
  })

  // Loader
})

// inject()
</script>

<template>
  <LoaderComponent :class="{'z-1' : loaderStore.getLoaderState() }" v-if="loaderStore.getLoaderState()"/>
  <div class="content" v-if="!loaderStore.getLoaderState()">
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

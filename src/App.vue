<script setup>
import LoaderComponent from '@/components/LoaderComponent.vue'
import SidebarMenu from '@/components/SidebarMenu.vue'
import { onMounted } from 'vue'
import { useSidebar } from '@/stores/sidebar'
import { useLoader } from '@/stores/loader'
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import useScroller from '@/assets/scroller'

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

  //useScroller()
})

// inject()
</script>

<template>
  <LoaderComponent :class="{'z-1' : loaderStore.getLoaderState() }" v-if="loaderStore.getLoaderState()"/>
  <div class="content relative" v-if="!loaderStore.getLoaderState()">
    <NavbarComponent />
    <RouterView/>
    <div class="overlay hidden"></div>
    <FooterComponent />
  </div>
  <SidebarMenu />
</template>

<style scoped></style>

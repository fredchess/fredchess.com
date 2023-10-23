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
  <!-- <LoaderComponent :class="{'z-1' : loaderStore.getLoaderState() }" v-if="loaderStore.getLoaderState()"/> -->
  <div class="content" v-if="!loaderStore.getLoaderState()">
    <NavbarComponent />
    <RouterView/>
    <FooterComponent />
  </div>
  <SidebarMenu />
  <div class="scroll-top flex justify-center items-center hidden" id="scroll-top">
    <span id="progress-value" class="text-black font-bold">&#x1F815;</span>
  </div>
</template>

<style scoped></style>

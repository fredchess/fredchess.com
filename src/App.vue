<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
import IntroComponent from './components/IntroComponent.vue'
import AboutComponent from './views/folio/AboutComponent.vue'
import PowersComponent from './views/folio/PowersComponent.vue'
import ExperiencesComponent from './views/folio/ExperiencesComponent.vue';
</script>

<template>
  <NavbarComponent />
  <div class="main">
    <IntroComponent />
    <AboutComponent />
    <PowersComponent />
    <ExperiencesComponent/>
  </div>
</template>

<style scoped></style>

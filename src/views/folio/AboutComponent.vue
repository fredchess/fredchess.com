<script setup>
import HeaderSection from '../../components/HeaderSection.vue'
</script>

<template>
  <section class="about min-h-[97vh]">
    <HeaderSection :title="'About me'" />
    <div class="flex justify-center items-center">
      <div class="overflow-hidden flex justify-between items-center space-x-3">
        <div class="text w-[60%]">
          <p class="leading-[2]">
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My
            interest in web development started back in 2012 when I decided to try editing custom
            Tumblr themes — turns out hacking together a custom reblog button taught me a lot about
            HTML & CSS! Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a student-led design studio. My
            main focus these days is building accessible, inclusive products and digital experiences
            at Upstatement for a variety of clients. I also recently launched a course that covers
            everything you need to build a web app with the Spotify API using Node & React.
          </p>
        </div>
        <div class="image w-[30%]">
          <img src="/images/profile.png" alt="" class="object-center object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

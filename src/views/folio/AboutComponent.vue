<script setup>
import HeaderSection from '../../components/HeaderSection.vue'
</script>

<template>
  <section
    class="about min-h-[70vh]"
    id="about"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-oas-offset="5000px"
  >
    <HeaderSection :title="'About me'" />
    <div class="flex justify-center items-center m-auto">
      <div
        class="flex-row sm:flex sm:justify-between items-center sm:space-x-3 space-y-7 sm:space-y-0"
      >
        <div class="text sm:w-[60%] space-y-2 text-sm md:text-base text-appgray font-medium">
          <p class="leading-relaxed">
            Greetings! I am Frederick, a full-stack developer who loves to build web applications. I
            started my journey as a developer a few years ago when I found out how much I enjoyed
            coding. Since then, I have learned and used different technologies and frameworks to
            create amazing web experiences.
          </p>
          <p class="leading-relaxed">
            My expertise lies in technologies such as . NET, Laravel, Vue.js and Python with
            FastAPI. I have developed strong skills in using these tools to create reliable and
            powerful applications.
          </p>
          <p class="leading-relaxed">
            I have worked on various exciting projects over the years, from internal applications
            for companies to consumer web platforms. I have also collaborated with talented teams in
            different settings, which gave me a deep insight into project management and effective
            collaboration.
          </p>
          <p class="leading-relaxed">
            Besides development, I have several other passions that enrich my personal growth. I
            like to play chess, a game that challenges me to think and strategize. I also practice a
            sport regularly, which helps me keep a balance between my professional and personal
            life.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

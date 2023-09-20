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
            Hello! My name is Frederick and I am a full-stack developer passionate about creating
            web applications. My development adventure began a few years ago when I discovered my
            passion for programming. Since then, I have explored different technologies and
            frameworks to create exceptional web experiences.
          </p>
          <p class="leading-relaxed">
            I specialize in technologies such as . NET, Laravel, Vue.js and Python with FastAPI. I
            have gained a solid experience in developing robust and powerful applications using
            these tools.
          </p>
          <p class="leading-relaxed">
            Over the years, I have had the chance to work on various interesting projects, ranging
            from internal applications of companies to consumer web platforms. I also had the
            opportunity to collaborate with talented teams in different environments, which allowed
            me to gain a deep understanding of project management and effective collaboration.
          </p>
          <p class="leading-relaxed">
            Apart from development, I have several other passions that contribute to my personal
            growth. I like to play chess, a game that requires reflection and strategy. I also enjoy
            the regular practice of a sport, which helps me maintain a balance between my
            professional and personal life.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>

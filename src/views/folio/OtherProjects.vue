<script setup>
import HeaderSection from '../../components/HeaderSection.vue';
import SingleOtherProject from './components/SingleOtherProject.vue';
import projects from '../../datas/projects.json';
// import {Swiper, SwiperSlide} from 'swiper/vue';

const selectedProjects = projects.slice(3, 6);

</script>

<template>
    <section class="otherprojects lg:min-h-screen">
        <HeaderSection :title="'Other noteworthy projects'"/>
        <div class="other_project_container flex justify-between">
            <SingleOtherProject v-for="(project, idx) in selectedProjects" 
            :key="idx"
            :id="project.id"
            :name="project.name"
            :description="project.description"
            :type="project.type"
            :used_technos="project.used_technos"
            :live_link="project.live_link"
            :git_link="project.git_link"
        />
        </div>
    </section>
</template>

<style scoped>
</style>
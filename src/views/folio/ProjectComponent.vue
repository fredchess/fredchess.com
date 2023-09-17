<script setup>
import HeaderSection from '../../components/HeaderSection.vue';
import projects from '../../datas/projects.json';
import SingleProject from './components/SingleProject.vue';

const selectedProjects = projects.slice(0, 3)

</script>

<template>
    <section class="projects" id="projects" data-aos="fade-up" data-aos-duration="1000">
        <HeaderSection :title="'Projects I\'ve worked on'"/>
        <div class="projects_container">
            <SingleProject v-for="(project, idx) in selectedProjects" :key="idx"
                :id="project.id"
                :name="project.name"
                :description="project.description"
                :live_link="project.live_link"
                :git_link="project.git_link"
                :image="project.image"
                :used_technos="project.used_technos"
                data-aos="fade-up" data-aos-duration="1000"
            />
        </div>
    </section>
</template>
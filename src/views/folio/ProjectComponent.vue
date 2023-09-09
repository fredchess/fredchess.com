<script setup>
import HeaderSection from '../../components/HeaderSection.vue';
import projects from '../../datas/projects.json';
import SingleProject from './components/SingleProject.vue';

console.log(projects)

</script>

<template>
    <section class="projects">
        <HeaderSection :title="'Projects I\'ve worked on'"/>
        <div class="projects_container">
            <SingleProject v-for="(project, idx) in projects" :key="idx"
                :id="project.id"
                :name="project.name"
                :description="project.description"
                :live_link="project.live_link"
                :git_link="project.git_link"
                :image="project.image"
                :used_technos="project.used_technos"
            />
        </div>
    </section>
</template>
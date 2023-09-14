<script setup>
import HeaderSection from '../../components/HeaderSection.vue';
import SingleOtherProject from './components/SingleOtherProject.vue';
import projects from '../../datas/projects.json';
import { onMounted } from 'vue';
// import {Swiper, SwiperSlide} from 'swiper/vue';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const selectedProjects = projects.slice(3);

onMounted(() => {
    new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: { delay: 2500, disableOnInteraction: false },
        loop: true,
        modules: [Navigation, Pagination],
        pagination: { 
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
         },
         breakpoints: {
            700: {
               slidesPerView: 2
            }
         }
    })
})


</script>

<template>
    <section class="otherprojects min-h-screen">
        <HeaderSection :title="'Other noteworthy projects'"/>
        <div class="other_project_container flex justify-between">
            <div class="swiper">
                <div class="swiper-wrapper">
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
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    
</style>
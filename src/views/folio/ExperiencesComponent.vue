<script setup>
import HeaderSection from '../../components/HeaderSection.vue';
import experiences from '../../datas/experiences.json';
import { ref } from 'vue';

experiences.reverse()

const selected_experience = ref(experiences[0] ?? null)

function showCompany (id)
{
    selected_experience.value = experiences.find(x => x.id == id)
}

</script>

<template>
    <section class="experiences min-h-[60vh]" id="experience" data-aos="fade-up" data-aos-duration="1000">
        <HeaderSection :title="'Where I\'ve Worked'" />
        <div class="experiences_container flex flex-col sm:flex-row space-y-5 items-baseline">
            <div class="nav flex sm:flex-col whitespace-nowrap w-full sm:w-max overflow-auto">
                <button v-for="(experience, idx) in experiences" :key="idx" @click="showCompany(experience.id)"
                    :class="{ selected: selected_experience?.id == experience.id }">
                    {{ experience.company }}
                </button>
            </div>
            <div class="tasks flex flex-col space-y-4 w-full sm:w-[70%]" v-if="selected_experience">
                <div class="experience_title text-2xl md:text-3xl mb-1">
                    <span>
                        {{ selected_experience.function }}
                    </span>
                    <span class="text-important ml-1"> 
                        <a :href="selected_experience.company_link"> @ {{ selected_experience.company }}</a>
                    </span>
                    <span class="text-xs text-gray-500 ml-2">
                        <a :href="selected_experience.location.link" target="_blank">({{ selected_experience.location.name }})</a>
                    </span>
                </div>
                <div class="experience_date mb-8">
                    <span>{{ selected_experience.start_date }}</span>
                    <span class="mx-2"> - </span>
                    <span>{{ selected_experience.still_workinng ? 'Present' : selected_experience.end_date }}</span>
                </div>
                <div class="task flex justify-start items-center text-left text-sm" v-for="(task, idx) in selected_experience.tasks" :key="idx">
                    <span>{{ task }}</span>
                </div>
                <!-- <div class="border absolute"></div> -->
            </div>
        </div>
    </section>
</template>

<style scoped>
.experiences_container {
    display: flex;
    justify-content: space-between;
}

.experiences_container .nav {
    /* display: flex;
    flex-direction: column; */
    /* width: 20%; */
    height: max-content;
    /* border-left: 2px #ccd6f6 solid; */
}

.experiences_container .nav button { 
    padding: 8px 16px;
 }

 .experiences_container .nav button::before {
    height: 100%;
    width: 2px;
 }

.experiences_container .nav button.selected {
    background: rgb(100 255 218 /.1);
    color: #64ffda;
    transition: all 200ms ease-in;
    /* border-left: 3px #64ffda solid; */
}

.experiences_container .nav button:hover {
    /* background-color: #64ffda; */
    background: rgb(100 255 218 /.1);
    color: #64ffda;
    transition: all 200ms ease-in;
}

/* .experiences_container .tasks {
    width: 70%;
} */

.experiences_container .task {
    display: flex;
    gap: 20px;
}

.experiences_container .task::before {
    content: url('/components/check-circle.svg');
    height: 25px;
    width: 25px;
}

</style>
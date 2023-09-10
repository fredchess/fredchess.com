<script setup>
import HeaderSection from '../../components/HeaderSection.vue';
import experiences from '../../datas/experiences.json';
import { ref } from 'vue';

const selected_experience = ref(experiences[0] ?? null)

console.log(experiences)

function showCompany (id)
{
    selected_experience.value = experiences.find(x => x.id == id)
}

</script>

<template>
    <section class="experiences min-h-screen">
        <HeaderSection :title="'Where I\'ve Worked'" />
        <div class="experiences_container">
            <div class="nav">
                <button v-for="(experience, idx) in experiences" :key="idx" @click="showCompany(experience.id)"
                    :class="{ selected: selected_experience?.id == experience.id }">
                    {{ experience.company }}
                </button>
            </div>
            <div class="tasks flex flex-col space-y-4" v-if="selected_experience">
                <div class="experience_title text-3xl mb-1">
                    <span>
                        {{ selected_experience.function }}
                    </span>
                    <span class="text-important ml-1"> 
                        <a :href="selected_experience.company_link"> @ {{ selected_experience.company }}</a>
                    </span>
                </div>
                <div class="experience_date mb-8">
                    <span>{{ selected_experience.start_date }}</span>
                    <span class="mx-2"> - </span>
                    <span>{{ selected_experience.still_workinng ? 'Present' : selected_experience.end_date }}</span>
                </div>
                <div class="task" v-for="(task, idx) in selected_experience.tasks" :key="idx">{{ task }}</div>
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
    display: flex;
    flex-direction: column;
    width: 20%;
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
    border-left: 3px #64ffda solid;
}

.experiences_container .nav button:hover {
    /* background-color: #64ffda; */
    background: rgb(100 255 218 /.1);
    color: #64ffda;
    transition: all 200ms ease-in;
}

.experiences_container .tasks {
    width: 70%;
}

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
<script setup>
import HeaderSection from '../../components/HeaderSection.vue';

</script>

<template>
    <section class="powers mb-10 sm:mb-20" data-aos="fade-up" data-aos-duration="1000">
        <HeaderSection :title="'My Superpowers'" />
        <div class="techs flex flex-wrap gap-10">
            <img title="csharp" src="/images/stacks/csharp.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Asp.Net" src="/images/stacks/asp.net.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Laravel" src="/images/stacks/laravel.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Javascript" src="/images/stacks/js.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Vue.js" src="/images/stacks/vue.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Node" src="/images/stacks/node.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Node Package Manager" src="/images/stacks/npm.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Tailwind Css" src="/images/stacks/tailwindcss.svg" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Visual Studio Code" src="/images/stacks/vscode.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
            <img title="Git" src="/images/stacks/git.png" alt="" class="tech mb-10 w-[18%] sm:w-24 object-contain">
        </div>
    </section>
</template>
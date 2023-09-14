<script setup>
    import SimpleButton from '../../components/buttons/SimpleButton.vue';
</script>

<template>
    <section class="intro flex flex-col items-start justify-center space-y-2">
        <span class="text-2xl font-bold">Hello 👋, I’m</span>
        <h2 class="text-[clamp(3rem,3vw,5rem)] font-bold text-important">Frederick Essono.</h2>
        <h3 class="text-[clamp(2rem,3vw,3rem)] font-bold">A profesionnal Full stack developer.</h3>
        <span class="text-xl block text-appgray mt-5"> I create meaningful solutions for your brands and give your customers the best experience possible.</span>
        <SimpleButton :text="'Pull my CV'" :transparent="true" >
            <font-awesome-icon icon="fa-regular fa-file" class="text-important"/>
        </SimpleButton>
    </section>
</template>
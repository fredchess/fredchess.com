<script setup>
    defineProps({
        title: String
    })
</script>

<template>
    <div class="headersection p-5 space-x-7 items-center">
        <h2 class="text-4xl font-bold relative max-w-[90%]">{{ title }}</h2>
    </div>
</template>

<style scoped>
</style>
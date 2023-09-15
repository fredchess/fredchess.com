import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useSidebar = defineStore('sidebar', () => {
    const isShowed = ref(false);

    function openSidebar() {
        if (isShowed.value) return

        isShowed.value = true

        document.querySelector('.sidebar-menu')?.classList.remove('hidden')
        document.querySelector('body')?.classList.add('blurred')
        document.querySelector('.overlay')?.classList.remove('hidden')
        document.querySelector('.navbar .menu')?.classList.add('openmenu')
    }

    function closeSidebar() {
        if (!isShowed.value) return

        isShowed.value = false

        document.querySelector('.sidebar-menu')?.classList.add('hidden')
        document.querySelector('body')?.classList.remove('blurred')
        document.querySelector('.overlay')?.classList.add('hidden')
        document.querySelector('.navbar .menu')?.classList.remove('openmenu')
    }

    function toggleSidebar() {
        isShowed.value ? closeSidebar() : openSidebar()
    }

    return {
        toggleSidebar,
        closeSidebar,
        openSidebar,
        isShowed
    }
})
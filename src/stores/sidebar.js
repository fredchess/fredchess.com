import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useSidebar = defineStore('sidebar', () => {
    const isShowed = ref(false);

    function changeVisibility(state = false) {
        isShowed.value = state;
    }

    return {
        isShowed,
        changeVisibility
    }
})
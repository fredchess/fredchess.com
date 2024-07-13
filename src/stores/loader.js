import { defineStore } from "pinia";
import { ref } from "vue";

export const useLoader = defineStore("loader", () => {
    const isLoading = ref(true);

    function changeLoading(value) {
        isLoading.value = value;
    }

    function getLoaderState() {
        return isLoading.value
    }

    return {
        isLoading,
        changeLoading,
        getLoaderState
    }
})
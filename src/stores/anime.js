import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAnimeStore = defineStore('animes', () => {

    const uri = import.meta.env.VITE_API_ENDPOINT_ANIME
    const animes = ref ([])

    async function get () {
        const response = await fetch(uri)
        const data = await response.json()
        console.log(data)
    }

    return { animes, get}
})
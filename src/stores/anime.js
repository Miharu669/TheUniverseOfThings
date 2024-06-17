import { ref } from 'vue'
import { defineStore } from 'pinia'
import AnimeRepository from '@/core/apis/anime/animeRepository'

export const useAnimeStore = defineStore('animes', () => {

    const animes = ref ([])
    const isLoading = ref(false)

    const repo = new AnimeRepository(import.meta.env.VITE_API_ENDPOINT_ANIME)

    async function getAnimes() {
        isLoading.value = true
        // animes.value = await repo.getAll()
        const response = await repo.getAll()
        animes.value = response.data
        setTimeout(() => {
            isLoading.value = false
        }, 2000)
        console.log('anime store setAnimes', animes.value)
    }

    // async function get () {
    //     const response = await fetch(uri)
    //     const data = await response.json()
    //     console.log(data)
    // }

    return { animes, isLoading, getAnimes }
})
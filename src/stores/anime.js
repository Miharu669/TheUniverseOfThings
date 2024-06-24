import { ref } from 'vue'
import { defineStore } from 'pinia'
import AnimeRepository from '@/core/apis/anime/animeRepository'
import AnimeService from '@/core/apis/anime/animeService'

export const useAnimeStore = defineStore('animes', () => {

    const animes = ref ([])
    const isLoading = ref(false)

    const repo = new AnimeRepository(import.meta.env.VITE_API_ENDPOINT_ANIME)
    const service = new AnimeService(repo)

    async function getAnimes() {
        isLoading.value = true
        animes.value = await service.getAllAnimes()
        setTimeout(() => {
            isLoading.value = false
        }, 2000)
    }

    return { animes, isLoading, getAnimes }
})
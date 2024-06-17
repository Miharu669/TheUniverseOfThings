import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAnimeStore = defineStore('anime', () => {
  const uri = import.meta.env.VITE_API_ENDPOINT_ANIME
  const animes = ref([])

  const fetchAnimes = async () => {
    try {
      // const response = await fetch('https://api.jikan.moe/v4/top/anime')
      const response = await fetch(uri)
      const data = await response.json()

      animes.value = data.data
    } catch (error) {
      console.error('Error fetching animes:', error)
    }
  }

  return {
   animes,
    fetchAnimes 
  }
})
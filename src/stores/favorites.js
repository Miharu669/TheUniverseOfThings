import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore({
  id: 'favorites',
  state: () => ({
    animeFavorites: []
  }),
  actions: {
    addAnimeToFavorites(anime) {
      this.animeFavorites.push(anime)
    },
    removeAnimeFromFavorites(animeId) {
      this.animeFavorites = this.animeFavorites.filter(anime => anime.id !== animeId)
    },
    isAnimeFavorite(animeId) {
      return this.animeFavorites.some(anime => anime.id === animeId)
    }
  }
})


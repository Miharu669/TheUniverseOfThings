<!-- src/components/AnimeList.vue -->
<script setup>
import { useAnimeStore } from '@/stores/anime';
import { onMounted } from 'vue';

const animeStore = useAnimeStore();

onMounted(async () => {
    await animeStore.getAnimes();
    
});
console.log('AnimeListTest', animeStore);
</script>

<template>
  <div>
    <h1>Anime List</h1>
    <div v-if="animeStore.isLoading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="anime in animeStore.animes" :key="anime.mal_id">{{ anime.title }}</li>
      </ul>
    </div>
  </div>
</template>

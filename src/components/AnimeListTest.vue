<!-- src/components/AnimeList.vue -->
<script setup>
import { useAnimeStore } from '@/stores/anime';
import { ref, onMounted } from 'vue';

const animeStore = useAnimeStore();
const isLoading = ref(false);

onMounted(async () => {
    isLoading.value = true;
    await animeStore.setAnimes();
    isLoading.value = false;
    
});
console.log('AnimeListTest', animeStore);
</script>

<template>
  <div>
    <h1>Anime List</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="anime in animeStore.animes" :key="anime.mal_id">{{ anime.title }}</li>
      </ul>
    </div>
  </div>
</template>

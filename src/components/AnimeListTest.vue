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
        <li v-for="anime in animeStore.animes" :key="anime.getTitle()">
          <img :src="anime.getImg()" alt="" width="100">
          <div>
            <h3>{{ anime.getTitle() }}</h3>
            <p>{{ anime.getYear() }}</p>
            <p>{{ anime.getType() }}</p>
            <p v-if="anime.getGenres()">{{ anime.getGenres() }}</p>
            <p v-else>Genres: N/A</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
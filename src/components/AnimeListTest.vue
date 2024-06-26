<script setup>
import { useFetchAnimes } from '@/hooks/useFetchAnimes';
import AnimeCard from './AnimeListTestCard.vue';
import PaginationTest from './PaginationTest.vue';
const { animes, isLoading, error, currentPage, setPage } = useFetchAnimes(import.meta.env.VITE_API_ENDPOINT_ANIME);
</script>

<template>
    <div>
      <h1>Anime List</h1>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div class="anime-grid" v-else>
        <ul>
            <li v-for="anime in animes" :key="anime.getTitle()">
               <AnimeCard :anime="anime" />
            </li>
        </ul>
        <PaginationTest :current-page="currentPage" @changePage="setPage" />
      </div>
    </div>
</template>

 <style scoped>
 h1 {
  font-size: 2em;
  margin-bottom: 1em;
  color: white;
  background-color: #272121;
  padding: 1em;
}  

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: contents; 
} 

.anime-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1em;
  background-color: #272121;
  padding: 1em;
  width: 1200px;
}  
</style>  
<script setup>
import { useFetchAnimes } from '@/hooks/useFetchAnimes';
import AnimeCard from './AnimeCard.vue';
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
            <li v-for="anime in animes" :key="anime.getTitle()" class="anime-item">
               <AnimeCard :anime="anime" />
            </li>
        </ul>
        <!-- <PaginationTest :current-page="currentPage" @changePage="setPage" /> -->
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

.anime-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1em;
  background-color: #272121;
  padding: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: contents; /* Ensures the ul does not affect the grid layout */
}

.anime-item {
  background: #363333;
  padding: 1em;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}

/* .anime-image {
  width: 150px;
  height: auto;
  margin-right: 1em;
  border-radius: 5px;
}

.contenedor-detalle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  color: white;
}

.anime-genres {
  margin-top: 0.5em;
}

.anime-genres span {
  border-radius: 3px;
  padding: 0.2em 0.5em;
  margin-right: 0.3em;
  background: #363333;
}

.heart-icon {
  color: orange;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
} */
</style>
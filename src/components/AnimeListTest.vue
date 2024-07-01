<script setup>
// import { useFetchAnimes } from "@/hooks/useFetchAnimes";
import AnimeCard from "./AnimeListTestCard.vue";
import PaginationTest from "./PaginationTest.vue";
import Spinner from "./Spinner.vue";
// const { animes, isLoading, error, currentPage, setPage } = useFetchAnimes(
//   import.meta.env.VITE_API_ENDPOINT_ANIME
// );
















const props = defineProps({
  animes: Array,
  isLoading: Boolean,
  error: Object,
  currentPage: Number,
  setPage: Function,
});
</script>

<template>
  <section>
    <h1>Anime List</h1>
  <div class="container">
    <Spinner v-if="isLoading">Loading...</Spinner>
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
</section>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 1.5em;
  margin-bottom: 30px;
  color: $ligth !important;
  background-color: $dark;
  font-family: $Poppins !important;
}
h3 {
  font-family: $Poppins !important;
  color: $ligth !important;
}
p {
  color: $ligth-p !important;
  font-family: $Nunito !important;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: contents;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
} 

.anime-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 30px;
  background-color: $dark;
  // padding: 1em;
  width: 1220px;
}
</style>

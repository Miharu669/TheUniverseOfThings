<script setup>
import { ref } from 'vue';
import { useFetchAnimes } from "@/hooks/useFetchAnimes";
import AnimeCard from "./AnimeListFavCard.vue";
import PaginationTest from "./PaginationTest.vue";
import Spinner from "./Spinner.vue";

const { animes, isLoading, error, currentPage, setPage } = useFetchAnimes(
  import.meta.env.VITE_API_ENDPOINT_ANIME
);

const favoriteAnimes = ref(new Set());

const addFavorite = (anime) => {
  favoriteAnimes.value.add(anime);
};

const removeFavorite = (anime) => {
  favoriteAnimes.value.delete(anime);
};

const toggleFavorite = (anime) => {
  if (favoriteAnimes.value.has(anime)) {
    removeFavorite(anime);
  } else {
    addFavorite(anime);
  }
};

const rateAnime = (payload) => {
  const { anime, rating } = payload;
  // Aquí puedes implementar la lógica para almacenar el rating del anime
  console.log(`Rated ${anime.getTitle()} with ${rating} stars`);
};
</script>

<template>
  <div>
    <h1>Anime List</h1>
    <Spinner v-if="isLoading">Loading...</Spinner>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div class="anime-grid" v-else>
      <ul>
        <li v-for="anime in animes" :key="anime.getTitle()">
          <AnimeCard 
            :anime="anime" 
            :isFavorite="favoriteAnimes.has(anime)"
            @toggleFavorite="toggleFavorite"
            @rate="rateAnime"
          />
        </li>
      </ul>
      <PaginationTest :current-page="currentPage" @changePage="setPage" />
    </div>
    <div class="favorites">
      <h2>Favorites</h2>
      <ul>
        <li v-for="anime in Array.from(favoriteAnimes)" :key="anime.getTitle()">
          <AnimeCard 
            :anime="anime" 
            :isFavorite="true"
            @toggleFavorite="toggleFavorite"
            @rate="rateAnime"
          />
          <button @click="removeFavorite(anime)">Remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 1.5em;
  margin-bottom: 1em;
  color: $ligth !important;
  background-color: $dark;
  padding: 1em;
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

.anime-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1em;
  background-color: $dark;
  padding: 1em;
  width: 1200px;
}

.favorites {
  margin-top: 2em;
}

.favorites h2 {
  font-size: 1.5em;
  margin-bottom: 1em;
  color: $light;
  font-family: $Poppins !important;
}

.favorites ul {
  list-style: none;
  padding: 0;
}

.favorites li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 0;
}
</style>

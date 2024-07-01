<script setup>
import { ref, computed } from "vue";
import { useFetchAnimes } from "@/hooks/useFetchAnimes";
import AnimeListTest from "@/components/AnimeListTest.vue";
import Filter from "@/components/FilterAnimes.vue";

const { animes, isLoading, error, currentPage, setPage } = useFetchAnimes(
  import.meta.env.VITE_API_ENDPOINT_ANIME
);

const selectedGenre = ref("");

function filterGenre(genre) {
  selectedGenre.value = genre;
}

const filteredAnimes = computed(() => {
  if (!selectedGenre.value) return animes.value;
  return animes.value.filter((anime) =>
    anime.genres.some((g) => g.name === selectedGenre.value)
  );
});
</script>

<template>
  <div class="container">
    <h1>Filter Anime by Genre</h1>
    <Filter @filterGenre="filterGenre" />
    <AnimeListTest
      :animes="filteredAnimes"
      :isLoading="isLoading"
      :error="error"
      :currentPage="currentPage"
      :setPage="setPage"
    />
  </div>
</template>

<style lang="scss" scoped>

.container {
  margin-top: 100px;
}

h1 {
  font-size: 32px;
  color: $light !important;
  font-family: $Poppins !important;
}
</style>
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
    <div class="hero">
      <h1>Filter Anime by Genre</h1>
      <Filter @filterGenre="filterGenre" />
    </div>
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

.hero {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.container {
  margin-top: 80px;
}

h1 {
  font-size: 32px;
  color: $light !important;
  font-family: $Poppins !important;
}
</style>
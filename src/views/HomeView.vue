<script setup>
import { useAnimeStore } from "@/stores/anime";
import { ref } from "vue";
import AnimeListTest from "@/components/AnimeListTest.vue";
import PaginationTest from "@/components/PaginationTest.vue";
import { useFetchAnimes } from "@/hooks/useFetchAnimes";

const { animes, isLoading, error, currentPage, setPage } = useFetchAnimes(
  import.meta.env.VITE_API_ENDPOINT_ANIME
);
</script>

<template>
    <div class="container-h1">
      <h1>Anime List</h1>
      <AnimeListTest
        :animes="animes"
        :isLoading="isLoading"
        :error="error"
        :currentPage="currentPage"
        :setPage="setPage"
      />
  </div>
</template>

<style lang="scss">

.container-h1 {
  margin-top: 80px;
}

#app {
  background-color: $dark;
}
html {
  background-color: $dark;
}
</style>

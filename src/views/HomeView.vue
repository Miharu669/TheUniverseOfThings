<script setup>
import { useAnimeStore } from "@/stores/anime";
import { ref } from "vue";
import AnimeListTest from "@/components/AnimeListTest.vue";
import PaginationTest from "@/components/PaginationTest.vue";
</script>

<template>
  <main>
    <h1>hello</h1>

    <AnimeListTest />
  </main>
</template>
<style lang="scss">
#app {
  background-color: $dark;
}
html {
  background-color: $dark;
}
</style>

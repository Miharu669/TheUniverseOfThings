<script setup>
import { useAnimeStore } from '@/stores/anime';
import { ref } from 'vue';
import AnimeListTest from '@/components/AnimeListTest.vue'
const store = useAnimeStore()
store.getAnimes()

// const anime = ref ([])


</script>

<template>
  <main>
    <h1>hello</h1>
    <AnimeListTest />
  </main>
  
</template>

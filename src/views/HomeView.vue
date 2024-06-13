<script setup>
import { useAnimeStore } from '@/stores/anime';
import { ref } from 'vue';


const animeStore = useAnimeStore() 

const anime = ref ([])

animeStore.get()


</script>

<template>
  <main>
    <h1>hello</h1>
  </main>
  
</template>

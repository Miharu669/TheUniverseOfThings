<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import { useAnimeStore } from '@/stores/anime';
import { ref } from 'vue';

const animeStore = useAnimeStore() 

const anime = ref ([])

animeStore.get()


</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup>
import { useAnimeStore } from '@/stores/anime';
import { ref } from 'vue';
import AnimeListTest from '@/components/AnimeListTest.vue'
import Pagination from '@/components/Pagination.vue';
import Spinner from '@/components/Spinner.vue';



</script>

<template>
  <main>
    <h1>hello</h1>
    
    <AnimeListTest />
    <Pagination/>
  </main>
  
</template>

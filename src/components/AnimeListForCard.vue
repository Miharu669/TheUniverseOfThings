<script setup>
import { useFetchAnimes } from '@/hooks/useFetchAnimes';
import AnimeCard from './AnimeCard.vue';
const { animes, isLoading, error } = useFetchAnimes(import.meta.env.VITE_API_ENDPOINT_ANIME);
</script>

<template>
    <div>
      <h1>Anime List</h1>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else>
        <ul>
            <li v-for="anime in animes" :key="anime.getTitle()">
                <AnimeCard :anime="anime" />
            </li>
        </ul>
      </div>
    </div>
  </template>
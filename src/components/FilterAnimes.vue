<script setup>
import { ref, computed } from 'vue';
import {useFetchAnimes} from '@/hooks/useFetchAnimes';
import AnimeCard from '@/components/AnimeCard.vue';

const { animes, isLoading, error } = useFetchAnimes(import.meta.env.VITE_API_ENDPOINT_ANIME);

const selectedGenres = ref ([]);

const genres = [
    'Action',
    'Comedy',
    'Drama'
];

const filteredAnimes = computed(() => {
    if (selectedGenres.value.length === 0) {
        return animes.value;
    }
    return animes.value.filter(anime =>
        selectedGenres.value.every(genre =>
            anime.getGenres().iincludes(genre)
        )
    )
});

const toggleGenre = (genre) => {
    if (selectedGenres.value.includes(genre)) {
        selectedGenres.value = selectedGenres.value.filter(g => g !== genre)
    } else {
        selectedGenres.value.push(genre)
    }
};

</script>

<template>
    <div>
      <h1>Anime List</h1>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else>
        <h2>Filter by Genres</h2>
        <div v-for="genre in genres" :key="genre">
                <input type="checkbox" :value="genre" v-model="selectedGenres" @change="toggleGenre(genre)"> {{ genre }}
        </div>
        <ul>
            <li v-for="anime in filteredAnimes" :key="anime.getTitle()">
                <AnimeCard :anime="anime" />
            </li>
        </ul>
      </div>
    </div>
</template>


<style lang="scss" scoped>

</style>
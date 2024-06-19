<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    anime: Object
  })

</script>

<template>
    <div>
        <img :src="anime.getImg()" alt="" width="100">
        <div>
            <h3>{{ anime.getTitle() }}</h3>
            <p>{{ anime.getYear() }}</p>
            <p>{{ anime.getType() }}</p>
            <p v-if="anime.getGenres()">{{ anime.getGenres() }}</p>
            <p v-else>Genres: N/A</p>
        </div>
    </div>
        
</template>

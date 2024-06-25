<script setup>
import { useAnimeStore } from '@/stores/anime';
import { onMounted, computed } from 'vue';

const animeStore = useAnimeStore();

onMounted(async () => {
    await animeStore.getAnimes(); 
});
console.log('AnimeListTest', animeStore);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Llamar a la función y mostrar el número aleatorio
const randomNumber = getRandomInt(6, 19);
console.log(`Número aleatorio entre 6 y 19: ${randomNumber}`);

const limitedAnimes = computed(() => animeStore.animes.slice(randomNumber-6,randomNumber))

</script>

<template>
  <div>
    <h1>Anime List</h1>
    <div v-if="animeStore.isLoading">Loading...</div>
    <div class="anime-grid" v-else >
      <ul>
        <!-- <li v-for="anime in animeStore.animes" :key="anime.getTitle()"> -->
          <li v-for="anime in limitedAnimes" :key="anime.getTitle()" class="anime-item"> 
          <img :src="anime.getImg()" alt="Anime Image" class="anime-image">
          <div class="contenedor-detalle">
            <h3>{{ anime.getTitle() }}</h3>
            <p>{{ anime.getYear() }}</p>
            <p>{{ anime.getType() }}</p>
            <p v-if="anime.getGenres()">{{ anime.getGenres() }}</p>
            <p v-else>Genres: N/A</p>
          </div>
          
          <i class="far fa-heart heart-icon"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 1em;
  color: white;
  background-color: #272121;
  padding: 1em;
}

.anime-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1em;
  background-color: #272121;
  padding: 1em;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: contents; /* Ensures the ul does not affect the grid layout */
}

.anime-item {
  background: #363333;
  padding: 1em;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}

.anime-image {
  width: 150px;
  height: auto;
  margin-right: 1em;
  border-radius: 5px;
}

.contenedor-detalle {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  color: white;
}

.anime-genres {
  margin-top: 0.5em;
}

.anime-genres span {
  border-radius: 3px;
  padding: 0.2em 0.5em;
  margin-right: 0.3em;
  background: #363333;
}

.heart-icon {
  color: orange;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
}
</style>

<script setup>
import { computed, onMounted } from 'vue'
import { useAnimeStore } from '../stores/animeStore'

const animeStore = useAnimeStore()
const { animes, fetchAnimes } = animeStore

onMounted(fetchAnimes)

//const limitedAnimes = computed(() => animes.value.slice(0, 6))

const limitedAnimes = computed(() => animes.slice(0, 6))
</script>

<template>
    <div>
      <h1>Lista de Animes </h1>
       <div v-for="anime in limitedAnimes" :key="anime.mal_id" class="anime-item"> 
        <!-- <div v-for="anime in animes" :key="anime.mal_id" class="anime-item"> -->
      <!-- <div v-for="anime in paginatedAnimes" :key="anime.mal_id" class="anime-item"> -->
            <img :src="anime.images.jpg.large_image_url" alt="Anime Image" class="anime-image" />
            <div class="contenedor-detalle">
              <div>
              <h2>TITLE : {{ anime.title }}</h2>
              </div>

              <div>
               <span> YEAR  : {{ anime.aired.string }}</span>
              </div>
  
              <div>
               <span> TYPE  : {{ anime.type }}</span>
              </div>
    
              <div class="anime-details">GENRES :
               <!-- <h2>TITLE : {{ anime.title }}</h2> -->
               <p class="anime-genres">
                  <span v-for="genre in anime.genres" :key="genre.mal_id"> {{ genre.name }}</span>
               </p>
              </div>
            </div>
      </div>
    </div>

  </template>
    
<style scoped>
  h1 {
  font-size: 2em;
  margin-bottom: 1em;
  color:white;
}

ul {
  list-style-type: none;
  padding: 0;
}

.contenedor-detalle{
  display: flex;  
  flex-direction: column;
  align-items: flex-start;
  font-size: 15px;
  color: white;
}

.anime-item {
  display: flex;
  align-items: left;
  /* background: #f9f9f9; */
  background: #363333;
  margin: 0.5em 0;
  padding: 1em;
  border-radius: 15px;
  width: 620px;
  flex-direction: row;
}

.anime-image {
  width: 150px;
  height: auto;
  margin-right: 1em;
  border-radius: 5px;
}

.anime-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  color: white;
}

.anime-genres {
  margin-top: 0.5em;
/*   font-size: 0.9em;
  color: #666; */
}

.anime-genres span {
  /* background: #eee; */
  border-radius: 3px;
  padding: 0.2em 0.5em;
  margin-right: 0.3em;
  background: #363333;
}
  </style>

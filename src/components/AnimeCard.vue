<script setup>

const props = defineProps({
    anime: Object
  })

</script>

<template>
    <div>
        <img :src="anime.getImg()" alt="Anime Image" class="anime-image">
        <div class="contenedor-detalle">
            <h3>{{ anime.getTitle() }}</h3>
            <p>{{ anime.getYear() }}</p>
            <p>{{ anime.getType() }}</p>
            <p v-if="anime.getGenres()">{{ anime.getGenres() }}</p>
            <p v-else>Genres: N/A</p>
        </div>
        <i class="far fa-heart heart-icon"></i>
    </div>
        
</template>

<style scoped>

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

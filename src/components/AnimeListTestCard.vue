<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  anime: Object
});
</script>

<template>

    <div class="anime-item">
      <img :src="anime.getImg()" alt="Anime Image" class="anime-image">
      <div class="contenedor-detalle">
        <h3>{{ anime.getTitle() }}</h3>
        <p>{{ anime.getYear() }}</p>
        <p>{{ anime.getType() }}</p>
        <p v-if="anime.getGenres()">{{ anime.getGenres() }}</p>
        <p v-else>Genres: N/A</p>
      </div>

      <img src="./icons/empty-heart.svg" class="pos_emptyheart" >
    </div>

</template>

<style scoped>

.anime-item {
  background: #363333; 
  padding: 1em; 
  border-radius: 15px; 
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100%;   
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

.pos_emptyheart{
  color: orange;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
}
</style> 
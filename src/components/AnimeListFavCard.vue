<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  anime: Object,
  isFavorite: Boolean,
});

const emits = defineEmits(['toggleFavorite', 'rate']);

const toggleFavorite = () => {
  emits('toggleFavorite', props.anime);
};

const rateAnime = (rating) => {
  emits('rate', { anime: props.anime, rating });
};
</script>

<template>
  <div class="anime-item">
    <img :src="anime.getImg()" alt="Anime Image" class="anime-image" />
    <div class="contenedor-detalle">
      <h3>{{ anime.getTitle() }}</h3>
      <p>{{ anime.getYear() }}</p>
      <p>{{ anime.getType() }}</p>
      <p v-if="anime.getGenres()">{{ anime.getGenres() }}</p>
      <p v-else>Genres: N/A</p>
    </div>
    <div class="rating-stars">
      <span v-for="star in 5" :key="star" @click="rateAnime(star)">
        <img :src="star <= anime.rating ? './src/components/icons/full-star.svg' : './src/components/icons/empty-star.svg'" class="star-icon" />
      </span>
    </div> 
    <img
      :src="isFavorite ? './src/components/icons/full-heart.svg' : './src/components/icons/empty-heart.svg'"
      class="pos_emptyheart"
      @click="toggleFavorite"
    />
  </div>
</template>

<style lang="scss" scoped>
.anime-item {
  background: $main;
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
  color: $ligth-p !important;
}

.rating-stars {
  margin-top: 0.5em;
  display: flex;
  align-items: center;
}

.star-icon {
  width: 20px;
  height: 20px;
  margin-right: 3px;
  cursor: pointer;
}

.pos_emptyheart {
  color: $orange;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
}
</style>

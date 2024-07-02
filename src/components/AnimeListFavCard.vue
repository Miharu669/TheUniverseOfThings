
<script setup>
//import { defineProps, defineEmits } from 'vue';

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

// se agrego hoy 01_07_2024
document.addEventListener('DOMContentLoaded', () => {
  const starElements = document.querySelectorAll('#starRating .star');
  const ratingValueElement = document.getElementById('ratingValue');
  let ratingValue = 0;

  function updateStars(value) {
    starElements.forEach(star => {
      const starValue = parseInt(star.getAttribute('data-value'), 10);
      console.log(`Updating star with value: ${starValue}`);
      if (starValue <= value) {
        star.src = './src/components/icons/full-star.svg';
        console.log('Star set to full:', star.src);
      } else {
        star.src = './src/components/icons/empty-star.svg';
        console.log('Star set to empty:', star.src);
      }
    });
  }

  starElements.forEach(star => {
    star.addEventListener('mouseover', () => {
      const value = parseInt(star.getAttribute('data-value'), 10);
      console.log(`Mouse over star with value: ${value}`);
      updateStars(value);
    });

    star.addEventListener('mouseout', () => {
      console.log('Mouse out, resetting stars to rating value:', ratingValue);
      updateStars(ratingValue);
    });

    star.addEventListener('click', () => {
      ratingValue = parseInt(star.getAttribute('data-value'), 10);
      console.log('Star clicked, new rating value:', ratingValue);
      ratingValueElement.textContent = ratingValue;
      updateStars(ratingValue);
    });
  });

  updateStars(ratingValue);
});
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
      <div class="star-rating" id="ratingValue"> 
     <img src="/src/components/icons/empty-star.svg" data-value="1" class="star" alt="1 estrella"> 
     <img src="/src/components/icons/empty-star.svg" data-value="2" class="star" alt="2 estrellas"> 
     <img src="/src/components/icons/empty-star.svg" data-value="3" class="star" alt="3 estrellas"> 
     <img src="/src/components/icons/empty-star.svg" data-value="4" class="star" alt="4 estrellas"> 
     <img src="/src/components/icons/empty-star.svg" data-value="5" class="star" alt="5 estrellas"> 
    </div> 
    <!-- <p><span id="ratingValue">0</span></p> -->
    </div>
    <!-- <div class="rating-stars"> -->
<!--       <div class="star-rating">
        <span>
        <img :src="star <= anime.rating ? './src/components/icons/full-star.svg' : './src/components/icons/empty-star.svg'" class="star-icon" />
      </span>
    </div>  -->
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

.star-rating { display: flex; direction: row; } 
.star { width: 40px; /* Tamaño de la estrella */ 
height: 40px; /* Tamaño de la estrella */ 
cursor: pointer; transition: opacity 0.3s; } .star:hover, .star:hover ~ .star { opacity: 0.7; } #ratingValue { font-weight: bold; margin-left: 10px; }
</style>

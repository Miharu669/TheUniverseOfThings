<script setup>
import { ref } from 'vue';
import AnimeCard from './AnimeCard.vue';
import { useFavoritesStore } from '@/stores/favorites';

const favoritesStore = useFavoritesStore();

const newAnime = ref({
  title: '',
  img: '',
  year: '',
  type: '',
  genres: ''
});

function addFavorite() {
  if (newAnime.value.title && newAnime.value.img) {
    favoritesStore.addFavorite({ 
      id: Date.now(), 
      title: newAnime.value.title, 
      img: newAnime.value.img,
      year: newAnime.value.year,
      type: newAnime.value.type,
      genres: newAnime.value.genres,
      rating: 0 
    });
    newAnime.value = { title: '', img: '', year: '', type: '', genres: '' };
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h3>Favorites</h3>
        <!-- Formulario para agregar un nuevo anime -->
        <div class="mb-3">
          <input v-model="newAnime.title" placeholder="Title" class="form-control mb-2" />
          <input v-model="newAnime.img" placeholder="Image URL" class="form-control mb-2" />
          <input v-model="newAnime.year" placeholder="Year" class="form-control mb-2" />
          <input v-model="newAnime.type" placeholder="Type" class="form-control mb-2" />
          <input v-model="newAnime.genres" placeholder="Genres" class="form-control mb-2" />
          <button class="btn btn-primary w-100" @click="addFavorite">Add Anime</button>
        </div>
        <!-- Lista de animes favoritos -->
        <AnimeCard v-for="anime in favoritesStore.favorites" :key="anime.id" :anime="anime" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 2em;
}
</style>

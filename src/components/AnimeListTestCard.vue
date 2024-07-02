<script setup>
import { ref } from "vue";

const props = defineProps({
  anime: Object,
});

const heartIcon = ref("./empty-heart.svg");

function heartButtonClick() {
  if (props.anime && typeof props.anime.getTitle === "function") {
    console.log("Setting favorite:", props.anime.getTitle());
    localStorage.setItem("favoriteCard", props.anime.getTitle());
  }
}

function heartSwap() {
  console.log("Current heart icon:", heartIcon.value);
  if (heartIcon.value.includes("empty-heart.svg")) {
    heartIcon.value = "./full-heart.svg";
  } else {
    heartIcon.value = "./empty-heart.svg";
  }
  console.log("New heart icon:", heartIcon.value);
}
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

    <button @click="heartButtonClick" class="heart-swap">
      <img
        :src="heartIcon"
        @click.stop="heartSwap"
        id="heart-swap"
        class="heart-icon"
        alt="Heart Icon"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>

h3 {
  font-family: $Poppins;
  font-size: 20px;
  font-weight: 500;
  color: $ligth;
  margin-block: 5px 10px;
}

p {
  font-family: $Nunito;
  font-size: 17px;
  color: $ligth-p;
  margin: 0;
}
.anime-item {
  background: $main;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100%;
}

.anime-image {
  width: 150px;
  height: auto;
  margin-right: 20px;
  border-radius: 10px;
}

.contenedor-detalle {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.heart-swap {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 1.5em;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
}

.heart-icon {
  width: 24px;
  height: 24px;
  display: block;
}
</style>

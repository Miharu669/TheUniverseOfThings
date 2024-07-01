<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

const props = defineProps({
  anime: Object,
});

const heartIcon = ref("./public/empty-heart.svg");

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

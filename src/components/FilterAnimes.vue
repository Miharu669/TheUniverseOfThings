<script setup>
  import { ref, defineEmits } from "vue";
  
  const emits = defineEmits(["filterGenre"]);
  const genres = [
    "Action",
    "Adventure",
    "Drama",
    "Fantasy",
    "Romance",
    "Sci-Fi",
  ];
  const selectedGenre = ref("");
  
  function onGenreChange(event) {
    selectedGenre.value = event.target.value;
    emits("filterGenre", selectedGenre.value);
  }
</script>

<template>
    <div>
      <label for="genre">Select Genre:</label>
      <select id="genre" @change="onGenreChange">
        <option value="">All</option>
        <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
      </select>
    </div>
</template>
  
  
<style lang="scss" scoped>
  select {
    margin: 1em 0;
    padding: 0.5em;
    font-size: 1em;
  }

  label {
  font-family: $Nunito;
  font-size: 17px;
  color: $ligth-p;
  margin-right: 20px;
}
</style>

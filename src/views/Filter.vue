<script setup>

import AnimeListForCard from '@/components/AnimeListForCard.vue';
import FilterAnimes from '@/components/FilterAnimes.vue';

import Pagination from '@/components/Pagination.vue';

</script>

<template>
    <div class="filter">
    </div>

    <!-- <FilterAnimes /> -->
    <AnimeListForCard />
    <Pagination/>
</template>

  
<style>
  @media (min-width: 1024px) {
    .filter {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>
  
<script setup>
import Pagination from '@/components/Pagination.vue';
</script>

<template>
    <div class="filter">
      <h1>This is a Filter page</h1>
    </div>
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
  
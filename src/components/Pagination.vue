<template>
    <div class="overflow-auto">
      <div class="mt-3">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          first-number
          last-number
        ></b-pagination>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          rows: 100,
          perPage: 1,
          currentPage: 5
        }
      }
    }
  </script>
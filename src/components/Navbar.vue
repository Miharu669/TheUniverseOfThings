<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>
<template> 
    <header>
    <div>
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="@/components/icons/logo-min.svg" class="d-inline-block align-top" alt="logo">
        Animeverse
      </b-navbar-brand>
      
      <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Filter">Filter</RouterLink>
        <RouterLink to="/Login">Login</RouterLink>
        <RouterLink to="/Favorites">Favorites</RouterLink>
        <RouterLink to="/Add">Add</RouterLink>
        <RouterLink to="/HomeAnime">HomeAninme</RouterLink>
        <RouterLink to="/About"><!--About--></RouterLink>
        <RouterLink to="/About"><!--About--></RouterLink>

    </b-navbar>
  </div>
    </header>
  </template>
  <style lang="scss">
  
  </style>
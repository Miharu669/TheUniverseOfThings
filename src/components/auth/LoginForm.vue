<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth.js'

const username = ref ('')
const password = ref ('')

const route = useRoute()
const router = useRouter()

const store = useAuthStore()

import totoroPic from '@/components/icons/totoro.jpg';


function login() {

    if (username.value == store.user.username && password.value == store.user.password) {
        store.user.isAuthenticated = true
        const redirectPath = route.query.redirect || '/Favorites'
        router.push(redirectPath)
    }
    
}

</script>


<template>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-md-8">
          <div class="card">
            <div class="card-body d-flex">

              <div class="img-container mr-4">
                <img :src="totoroPic" alt="Image" class="img-fluid">
              </div>
  
              <form class="flex-grow-1" @submit.prevent="login">
                <h3 class="card-title text-center mb-4">Login</h3>
  
    
                <div class="form-group">
                  <label for="username">Username</label>
                  <input type="text" class="form-control" id="username" v-model="username" required>
                </div>
  
        
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" class="form-control" id="password" v-model="password" required>
                </div>
  
    
                <button type="submit" class="btn btn-primary btn-block">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .card {
    margin-top: 20px;
  }
  
  .img-container {
    width: 150px;
    margin-right: 20px;
  }
  </style>

<!-- <template>
<div>
<form @submit.prevent="login">
<label for="username">username</label>
<input type="text" name="username" id="username" v-model="username">

<label for="password">password</label>
<input type="password" name="password" id="password" v-model="password">
<button type="submit">Login</button>
</form>
</div>
</template> -->
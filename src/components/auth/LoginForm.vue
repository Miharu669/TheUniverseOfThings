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
        <div class="row gx-0 align-items-stretch">
          <div class="col-md-6">
            <div class="card h-100 full-card">
              <div class="card-body p-0">
                <img :src="totoroPic" alt="Image" class="img-fluid">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 card-with-opacity">
              <div class="card-body d-flex flex-column justify-content-center">
                <form @submit.prevent="login" class="text-left">
                  <h4 class="card-title mb-4">Welcome!</h4>
                  <p style="color: #BCB2B2">Login to your account</p>
                  <div class="form-group mb-3">
                    <label style="color: #BCB2B2" for="username">Username</label>
                    <input type="text" style="background-color: #BCB2B2" class="form-control" id="username" placeholder="Please enter your username" v-model="username" required>
                  </div>
                  <div class="form-group mb-3">
                    <label style="color: #BCB2B2" for="password">Password</label>
                    <input type="password" style="background-color: #BCB2B2" class="form-control" id="password" placeholder="Please enter your password" v-model="password" required>
                  </div>
                  <button type="submit" id="login-btn" class="btn btn-sm btn-orange w-50">Login</button> 
                  <!-- <p>Don't have an account? Sign In</p> -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin-top: 20px;
  border-radius: 10px;
  
}

.full-card .card-body {
  padding: 0; 
  
}

.full-card img {
  object-fit: cover; 
  height: 100%;
  width: 100%;
  border-radius: 10px;
}

.card-body {
  height: 100%;
  background-color: #363333; 
  color: #F6E9E9;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left; 
  padding: 20px; 
  border-radius: 10px;
}

.btn-orange {
  background-color: #E16428; 
  color: #F6E9E9; 
  font-size: large;
}

.btn-orange:hover {
  background-color: #c04e22; 
}

.btn-sm {
  width: 50%; 
  margin-top: 10px; 
  border-radius: 30px;
  height: 40px;
}

.form-group {
  margin-bottom: 1rem; 
  
}

.text-left {
  text-align: left; 
}

.card-title{
  margin:0;
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
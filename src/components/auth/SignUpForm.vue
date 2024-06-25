<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')

const route = useRoute()
const router = useRouter()

const store = useAuthStore()

import totoroPic from '@/components/icons/totoro.jpg';

function register() {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!")
    return
  }

  const newUser = {
    username: username.value,
    password: password.value
  }

  store.register(newUser)
  router.push('/Login')
}
</script>


<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-8">
        <div class="card h-100">
          <div class="card-body d-flex align-items-stretch">
            <div class="row gx-0">
              <div class="col-md-6">
                <img :src="totoroPic" alt="Image" class="img-fluid w-100" style="border-top-left-radius: 10px; border-bottom-left-radius: 10px;">
              </div>
              <div id="form-col" class="col-md-6 d-flex flex-column justify-content-center">
                <form @submit.prevent="register" class="text-left">
                  <h4 class="card-title mb-4">Sign Up</h4>
                  <p>Create your account</p>
                  <div class="form-group mb-3">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" placeholder="Please enter your username" v-model="username" required>
                  </div>
                  <div class="form-group mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Please enter your password" v-model="password" required>
                  </div>
                  <div class="form-group mb-3">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Please confirm your password" v-model="confirmPassword" required>
                  </div>
                  <button type="submit" class="btn btn-sm btn-orange mt-3">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 10px;
  width: 600px;
  font-family: "Poppins", sans-serif;
  margin-top: 50px;
}

.card-body {
  padding: 0; 
}

.img-fluid {
  object-fit: cover;
  height: 100%; 
  width: 100%;
}

.btn-orange {
  background-color:$orange !important;
  color: $light;
  border-radius: 40px;
  font-size: 15px;

}

.btn-orange:hover {
  background-color: #ffddd0;
  
}

.btn-sm {
  height: 40px; 
  width: 80px;
}

#form-col{
  background-color: $main; 
  color: $light; 
  border-top-right-radius: 10px; 
  border-bottom-right-radius: 10px;

}

form{
  margin: 20px;
}


.form-group {
  margin-bottom: 1rem;
  color: $ligth-p; 
}

.text-left {
  text-align: left;
}

.card-title {
  margin: 0;
  color: $ligth;
}

p{
  font-size: small;
  margin-top: 10px;
  color: $ligth-p;
}

#username, #password, #confirmPassword{
  background-color: rgba($ligth-p, 0.1);
  border-radius: 10px;
  color: $ligth-p; 
  font-size: 15px;
  height: 50px;
}


</style>

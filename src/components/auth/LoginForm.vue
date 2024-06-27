<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth.js";

const username = ref("");
const password = ref("");

const route = useRoute();
const router = useRouter();

const store = useAuthStore();

import totoroPic from "@/components/icons/totoro.jpg";

function login() {
  try {
    store.login(username.value, password.value);
    const redirectPath = route.query.redirect || "/Favorites";
    router.push(redirectPath);
  } catch (error) {
    alert(error.message);
  }
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card h-100 no-border">
          <div class="card-body d-flex align-items-stretch">
            <div class="row gx-0">
              <div class="col-md-6">
                <img :src="totoroPic" alt="Image" class="img-fluid w-100" style="border-top-left-radius: 10px; border-bottom-left-radius: 10px;">
              </div>
              <div id="form-col" class="col-md-6 d-flex flex-column justify-content-center">
                <form @submit.prevent="login" class="text-left">
                  <h4 class="card-title mb-4">Welcome!</h4>
                  <p>Login to your account</p>
                  <div class="form-group mb-3">
                    <label for="username">Username</label>
                    <input type="text" class="form-control no-border" id="username" placeholder="Please enter your username" v-model="username" required>
                  </div>
                  <div class="form-group mb-3">
                    <label for="password">Password</label>
                    <input type="password" class="form-control no-border" id="password" placeholder="Please enter your password" v-model="password" required>
                  </div>
                  <button type="submit" class="btn btn-sm btn-orange mt-3">Sign In</button>
                  <p>Don't have an account? <router-link to="/signup" style="color:#E16428;"> Sign Up</router-link></p>
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
.container {
  min-height: 100vh;
  margin-inline: auto;
}

.card {
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  font-family: "Poppins", sans-serif;
  margin-top: 90px;
  min-height: 500px; 
}

.card-body {
  padding: 0;
  background-color: $dark !important;
}

.no-border {
  border: none;
  box-shadow: none;
}

.img-fluid {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.btn-orange {
  background-color: $orange !important;
  color: $light;
  border-radius: 40px;
  font-size: 15px;
}

.btn-sm {
  height: 40px;
  width: 80px;
}

#form-col {
  background-color: $main;
  color: $light;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

form {
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

p {
  font-size: small;
  margin-top: 10px;
  color: $ligth-p;
}

#username,
#password,
#confirmPassword {
  background-color: rgba($ligth-p, 0.1);
  border-radius: 10px;
  color: $ligth-p;
  font-size: 15px;
  height: 50px;
}

::placeholder {
  color: rgba($ligth-p, 0.5) !important;
}

@media (max-width: 767px) {
  .container {
    height: 100vh;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-fluid {
    display: none;
  }

  .card {
    height: 100%;
    width: 100%;
    max-width: none;
  }

  .card-body {
    flex-direction: column;
    object-fit: cover;
  }

  #form-col {
    border-radius: 10px;
    padding: 20px;
  }
}
</style>


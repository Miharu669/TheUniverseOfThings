<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth.js'

const username = ref ('')
const password = ref ('')

const route = useRoute()
const router = useRouter()

const store = useAuthStore()



function login() {

    if (username.value == store.user.username && password.value == store.user.password) {
        store.user.isAuthenticated = true
        const redirectPath = route.query.redirect || '/Favorites'
        router.push(redirectPath)
    }
    
}

</script>
<template>
<div>
<form @submit.prevent="login">
<label for="username">username</label>
<input type="text" name="username" id="username" v-model="username">

<label for="password">password</label>
<input type="password" name="password" id="password" v-model="password">
</form>
</div>

</template>
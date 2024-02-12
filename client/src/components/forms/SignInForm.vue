<script lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { SigninDto } from '../../../../nestjs-backend/src/'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
  }
}
</script>

<template>
  <form @submit.prevent="handleSignin">
    <label for="username">Username:</label>
    <input id="username" v-model="username" type="text" />
    <label for="password">Password:</label>
    <input id="password" v-model="password" type="password" />
    <button type="submit">Sign In</button>
  </form>
</template>

<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">

        <v-toolbar flat dense dark class="teal">
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pd-2 pb-2">
          <v-text-field
            type="email"
            label="Email"
            name="email"
            v-model="email"
            required>
          </v-text-field>
          <v-text-field
            type="password"
            name="password"
            label="Password"
            v-model="password"
            required>
          </v-text-field>

          <small v-html="error"></small>
          <br>
          <v-btn dark class="teal"
            @click="login"
            type="button">
            Login
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationServices'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }

}
</script>

<style scoped>
.error { color: red; }
</style>

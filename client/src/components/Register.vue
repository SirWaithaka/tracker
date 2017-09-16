<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">

        <v-toolbar flat dense dark class="teal">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pd-2 pb-2">
          <form name="tab-tracker-form">
            <v-text-field
              type="email"
              label="Email"
              v-model="email"
              required>
            </v-text-field>
            <v-text-field
              type="password"
              label="Password"
              v-model="password"
              auto-complete="new-password"
              required>
            </v-text-field>

            <small v-html="error"></small>
            <br>
            <v-btn dark class="teal"
              @click="register"
              type="button">
              Register
            </v-btn>
          </form>
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
    async register () {
      try {
        const response = await AuthenticationService.register({
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

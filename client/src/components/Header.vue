<template>
  <v-toolbar fixed dark class="teal">
    <v-toolbar-title class="mr-4">
      <span
        class="home"
        @click="navigateTo({ name: 'root' })">
        Tab Tracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn dark flat
       v-if="!$store.state.isUserLoggedIn"
       @click="navigateTo({name: 'Login'})">
       Login
      </v-btn>

      <v-btn flat dark
      v-if="!$store.state.isUserLoggedIn"
       @click="navigateTo({name: 'Register'})">
        Sign Up
      </v-btn>

      <v-btn flat dark
      v-if="$store.state.isUserLoggedIn"
       @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        // REDIRECT to Home
        this.$router.push({
          name: 'root'
        })
      }
    }
  }
</script>

<style scoped>

</style>

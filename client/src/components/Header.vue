<template>
  <v-toolbar fixed dark class="teal">
    <v-toolbar-title class="mr-4">
      Tab Tracker
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn dark flat
       @click="navigateTo({name: 'Login'})">
       Login
      </v-btn>
      <v-btn flat dark
       @click="navigateTo({name: 'Register'})">
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped>

</style>

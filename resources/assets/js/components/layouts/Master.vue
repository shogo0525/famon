<template>
  <div id="app">
    <ul class="nav" v-if="loggedIn">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><button @click="logout">Logout</button></li>
    </ul>
    
    <b-container fluid class="text-center">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
			loggedIn: 'auth/loggedIn'
		})
  },
  methods: {
    logout() {
      this.$store.dispatch('item/clearItems')
      this.$store.dispatch('auth/logout')
        .then(response => {
          this.$router.push({name: 'home'})
        })
    }
  }
}
</script>

<style>
body {
  padding: 20px;
  max-width :800px;
  margin: 0 auto; 
}
h2 {
  color: #f9d506;
}
li {
  margin-right: 10px;
}
</style>
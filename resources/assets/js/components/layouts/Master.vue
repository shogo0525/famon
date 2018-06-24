<template>
  <div id="app">
    <ul class="nav" v-if="loggedIn">
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'add-item' }">Add Item</router-link></li>
      <li><button @click="logout">Logout</button></li>
    </ul>
    
    <router-view></router-view>
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
li {
  margin-right: 10px;
}
</style>
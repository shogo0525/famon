<template>
  <div id="app">
    
    <main>
      <b-container fluid class="text-center">
        <router-view></router-view>
      </b-container>
    </main>

    <footer v-if="loggedIn">
      <router-link :to="{ name: 'home' }" exact>記録</router-link>
      <router-link :to="{ name: 'chart' }" exact>集計</router-link>
      <router-link :to="{ name: 'setting' }" exact>設定</router-link>
    </footer>

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

<style lang="scss" scoped>
body {
  max-width :800px;
  margin: 0 auto; 
}
main {
  padding: 25px 0 60px;
}
h2 {
  color: #f9d506;
}
li {
  margin-right: 10px;
}
footer {
  width: 100%;
  height: 60px;
  border: 1px solid #f9d506;
  background: white;
  position: fixed;
  bottom: 0;
  display: flex;

  a {
    height: 100%;
    width: 33.3%;
    text-align: center;
    border: 1px solid white;
    border: 1px solid #f9d506;
    color: #f9d506;
    line-height: 60px;
    &:link, &:visited, &:hover, &:active {
      text-decoration: none;
    }
  }

  .router-link-active {
    border: 3px solid #f9d506;
  }
}
</style>
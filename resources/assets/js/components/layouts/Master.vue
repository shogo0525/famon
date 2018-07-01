<template>
  <div id="app">
    
    <main>
      <b-container fluid class="text-center">
        <router-view></router-view>
      </b-container>
    </main>

    <footer v-if="loggedIn">
      <router-link :to="{ name: 'home' }" exact>ホーム</router-link>
      <router-link :to="{ name: 'chart' }" exact>集計</router-link>
      <router-link :to="{ name: 'add-category' }" exact>カテゴリの追加</router-link>
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
  padding-bottom: 60px;
}
h2 {
  color: #f9d506;
}
li {
  margin-right: 10px;
}
footer {
  background: #f9d506;
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  display: flex;

  a {
    height: 100%;
    width: 25%;
    text-align: center;
    border: 1px solid white;
    color: white;
    line-height: 60px;
    &:link, &:visited, &:hover, &:active {
      text-decoration: none;
    }
  }

  .router-link-active {
    border: 2px solid white;
  }
}
</style>
<template>
  <div>
    <h2>famon</h2>
    <div v-if="!loggedIn" class="not-auth">
      <router-link :to="{ name: 'login' }" class="btn btn-secondary btn-lg btn-block">ログイン</router-link>
      <router-link :to="{ name: 'register' }" class="btn btn-secondary btn-lg btn-block">ユーザー登録</router-link>
    </div>
    <div v-else>
      <items></items>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Items from '@/components/pages/Items.vue'
export default {
  name: 'home',
  components: { Items },
  computed: {
    ...mapGetters({
			loggedIn: 'auth/loggedIn'
		})
  }
}
</script>

<style scoped>
</style>
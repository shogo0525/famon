<template>
  <div>
    <div v-if="!loggedIn" class="not-auth">
      <login></login>
      <hr>
      <router-link :to="{ name: 'register' }" class="btn btn-secondary btn-lg btn-block">ユーザー登録</router-link>
    </div>
    <div v-else>
      <items></items>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from '@/components/pages/Login.vue'
import Items from '@/components/pages/Items.vue'
export default {
  name: 'home',
  components: { Items, Login },
  computed: {
    ...mapGetters({
			loggedIn: 'auth/loggedIn'
		})
  }
}
</script>

<style scoped>
</style>
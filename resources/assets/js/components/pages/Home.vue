<template>
  <div>
    <h2>famon</h2>
    <div v-if="!loggedIn">
      <router-link :to="{ name: 'login' }">ログイン</router-link>
      <router-link :to="{ name: 'register' }">ユーザー登録</router-link>
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
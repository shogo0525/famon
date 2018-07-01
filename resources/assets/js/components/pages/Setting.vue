<template>
  <div>
    <add-category></add-category>
    <hr>
    <button @click="logout" class="btn btn-danger btn-lg btn-block">ログアウト</button>
  </div>
</template>

<script>
import AddCategory from '@/components/pages/AddCategory.vue'
export default {
  name: 'setting',
  components: { AddCategory },
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

<style scoped>
</style>
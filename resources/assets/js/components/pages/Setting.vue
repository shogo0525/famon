<template>
  <div>
    <button @click="logout" class="btn btn-warning btn-lg btn-block">Logout</button>
  </div>
</template>

<script>
export default {
  name: 'setting',
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
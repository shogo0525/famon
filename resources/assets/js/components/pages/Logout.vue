<template>
</template>

<script>
export default {
  name: 'logout',
  created() {
    this.$store.dispatch('item/clearItems')
    this.$store.dispatch('auth/logout')
      .then(response => {
        this.$router.push({name: 'login'})
      })
  }
}
</script>
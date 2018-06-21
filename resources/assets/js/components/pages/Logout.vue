<template>
</template>

<script>
export default {
  name: 'logout',
  created() {
    this.$store.dispatch('logout')
      .then(response => {
        this.$router.push({name: 'login'})
      })
  }
}
</script>
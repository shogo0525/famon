<template>
  <div>
    <h2>Login</h2>

    <form action="#" @submit.prevent="login">
      <div>
        <label for="email">Username/Email</label>
        <input type="email" name="username" id="username" v-model="username">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      })
        .then(response => {
          this.$router.push({name: 'home'})
        })
    }
  }
}
</script>
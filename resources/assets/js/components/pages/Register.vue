<template>
  <div>
    <h2>Register</h2>

    <form action="#" @submit.prevent="register">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name">
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email">
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password">
      </div>

      <div>
        <button type="submit">Create Account</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
        .then(response => {
          this.$router.push({name: 'login'})
        })
    }
  }
}
</script>
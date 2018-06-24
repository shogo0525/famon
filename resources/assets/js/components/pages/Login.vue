<template>
  <div>
    <h2>ログイン</h2>

    <b-form @submit.prevent="login">
      <b-form-group label="メールアドレス"
                    label-for="username">
        <b-form-input id="username"
                      type="email"
                      name="username"
                      v-model="username"
                      placeholder="メールアドレス">

        </b-form-input>
      </b-form-group>

      <b-form-group label="パスワード"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      name="password"
                      v-model="password"
                      placeholder="password">

        </b-form-input>
      </b-form-group>

      <b-button type="submit" class="btn btn-warning btn-lg btn-block">ログイン</b-button>
    </b-form>
    <hr>
    <router-link :to="{ name: 'home' }" class="btn btn-secondary btn-lg btn-block">ホーム</router-link>
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
      this.$store.dispatch('auth/login', {
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

<style>
form {
  margin: 20px 0;
}
</style>
<template>
  <div>
    <h2>ユーザー登録</h2>

    <b-form @submit.prevent="register">
      <b-form-group label="ニックネーム"
                    label-for="name">
      <b-form-input id="name"
                    type="text"
                    name="name"
                    v-model="name"
                    placeholder="ニックネーム">
      </b-form-input>
      </b-form-group>

      <b-form-group label="メールアドレス"
                    label-for="email">
      <b-form-input id="email"
                    type="email"
                    name="email"
                    v-model="email"
                    placeholder="ニックネーム">
      </b-form-input>
      </b-form-group>

      <b-form-group label="パスワード"
                    label-for="password">
      <b-form-input id="password"
                    type="password"
                    name="password"
                    v-model="password"
                    placeholder="パスワード">
      </b-form-input>
      </b-form-group>

      <b-button type="submit" class="btn btn-warning btn-lg btn-block">登録</b-button>
    </b-form>
    <hr>
    <router-link :to="{ name: 'home' }" class="btn btn-secondary btn-lg btn-block">ホーム</router-link>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      this.$store.dispatch('auth/register', {
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

<style>
form {
  margin: 20px 0;
}
</style>
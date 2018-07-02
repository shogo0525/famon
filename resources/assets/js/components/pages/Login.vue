<template>
  <div>
    <div class="header-logo">
      <img class="logo" src="/images/logo.png">
      <h1>夫婦のための家計簿アプリ</h1>
    </div>
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
                      placeholder="パスワード">

        </b-form-input>
      </b-form-group>

      <b-button type="submit" class="btn btn-warning btn-lg btn-block">ログイン</b-button>
    </b-form>
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

<style lang="scss">
.header-logo {
  margin-bottom: 50px;
  .logo {
    width: 60%;
  }
  h1 {
    color: #f9d506;
    font-size: 1.5rem;
    margin-top: 10px;
  }
}
form {
  margin: 20px 0;
}
</style>
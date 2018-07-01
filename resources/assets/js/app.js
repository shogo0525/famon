import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import store from './store'
import './filters'

import axios from 'axios'
if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://famon.herokuapp.com/api'
} else {
  axios.defaults.baseURL = 'http://localhost/api'
}


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters['auth/loggedIn']) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters['auth/loggedIn']) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
})


import Master from '@/components/layouts/Master'
const app = new Vue({
  router,
  store,
  components: { Master },
  template: '<Master/>'
})

if (store.getters['auth/loggedIn']) {
  store.dispatch('category/getCategories')
  const unwatch_category = store.watch(
    state => state.category.loaded,
    loaded => {
      if (loaded) {
        app.$mount('#app')
        unwatch_category()
      }
    }
  )
} else {
  app.$mount('#app')
  const unwatch_auth = store.watch(
    state => state.auth.token,
    token => {
      if (token) {
        //app.$destroy('#app')
        store.dispatch('category/getCategories')
        console.log("store.dispatch('category/getCategories')")
        const unwatch_category = store.watch(
          state => state.category.loaded,
          loaded => {
            if (loaded) {
             // app.$mount('#app')
              unwatch_auth()
              unwatch_category()
            }
          }
        )
      }
    }
  )
}

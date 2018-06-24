import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

// import 'onsenui/css/onsenui.css'
// import 'onsenui/css/onsen-css-components.css'
// import VueOnsen from 'vue-onsenui'
// Vue.use(VueOnsen)

import store from './store'


const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
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
    el: '#app',
    router,
    store,
    components: { Master },
    template: '<Master/>'
})

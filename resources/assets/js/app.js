import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import VueOnsen from 'vue-onsenui'
Vue.use(VueOnsen)

import { store } from './store/store'


const router = new VueRouter({
    mode: 'history',
    routes
})

import Master from '@/components/layouts/Master'
const app = new Vue({
    el: '#app',
    router,
    store,
    components: { Master },
    template: '<Master/>'
})

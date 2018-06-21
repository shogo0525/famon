import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost/api'

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
    items: []
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    },
    items(state) {
      return state.items
    }
  },
  mutations: {
    getItems(state, items) {
      state.items = items
    },
    addItem(state, item) {
      state.items.push(item)
    },
    retrieveToken(state, token) {
      state.token = token
    },
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/login', {
          username: credentials.username,
          password: credentials.password,
        })
          .then(response => {
            const token = response.data.access_token
            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getItems(context) {
      axios.get('/items')
        .then(response => {
          context.commit('getItems', response.data)
        })
        .catch(error => console.log(error))
    },
    addItem(context, item) {
      axios.post('/items', {
        user_id: 1,
        category_id: 1,
        date: item.date,
        price: item.price,
        note: "テスト投稿です。"
      })
        .then(response => {
          context.commit('addItem', response.data)
        })
        .catch(error => console.log(error.data))
    }
  }
})
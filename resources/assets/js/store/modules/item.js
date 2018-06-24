import axios from 'axios'
axios.defaults.baseURL = 'http://localhost/api'

const state = {
  items: []
}

const getters = {
  items(state) {
    return state.items
  }
}

const mutations = {
  getItems(state, items) {
    state.items = items
  },
  addItem(state, item) {
    state.items.push(item)
  },
  clearItems(state) {
    state.items = []
  }
}

const actions = {
  getItems(context) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${context.rootState.auth.token}`

    axios.get('/items')
      .then(response => {
        context.commit('getItems', response.data)
      })
      .catch(error => console.log(error))
  },
  addItem(context, item) {
    axios.post('/items', {
      date: item.date,
      price: item.price,
      category_id: item.category_id,
      note: "テスト投稿です。"
    })
      .then(response => {
        context.commit('addItem', response.data)
      })
      .catch(error => console.log(error))
  },
  clearItems(context) {
    context.commit('clearItems')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
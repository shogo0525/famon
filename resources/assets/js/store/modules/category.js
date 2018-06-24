import axios from 'axios'
axios.defaults.baseURL = 'http://localhost/api'

const state = {
  categories: []
}

const getters = {
  categories(state) {
    return state.categories
  }
}

const mutations = {
  getCategories(state, categories) {
    state.categories = categories
  }
}

const actions = {
  getCategories(context) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${context.rootState.auth.token}`

    axios.get('/categories')
      .then(response => {
        context.commit('getCategories', response.data)
      })
      .catch(error => console.log(error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
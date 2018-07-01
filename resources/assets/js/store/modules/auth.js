import axios from 'axios'

const state = {
  token: localStorage.getItem('access_token') || null
}

const getters = {
  loggedIn(state) {
    return state.token !== null
  }
}

const mutations = {
  retrieveToken(state, token) {
    state.token = token
  },
  destroyToken(state) {
    state.token = null
  }
}

const actions = {
  register(context, data) {
    return new Promise((resolve, reject) => {
      axios.post('/register', {
        name: data.name,
        email: data.email,
        password: data.password,
      })
        .then(response => {
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
  },
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
  logout(context) {
    if(context.getters.loggedIn) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${context.state.token}`

      return new Promise((resolve, reject) => {
        axios.post('/logout')
          .then(response => {
            localStorage.removeItem('access_token')
            context.commit('destroyToken')
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            context.commit('destroyToken')
            reject(error)
          })
      })
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
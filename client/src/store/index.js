import Vue from 'vue'
import Vuex from 'vuex'
import { addApiErrorHandlerInterceptor, api } from '../api'
Vue.use(Vuex)

export const CREATE_USER_ACTION = 'CREATE_USER_ACTION'

const state = {
  user: {},
}
const getters = {}
const mutations = {}

export const actions = {
  async [CREATE_USER_ACTION]({state, commit, dispatch}, userData) {
    await api.post('users', userData)
  },
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})

addApiErrorHandlerInterceptor(error => {
  store.state.showError = true
})

export default store

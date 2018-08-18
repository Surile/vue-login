import Vue from 'vue'
import Vuex from 'vuex'
import { login } from './client'
import { TokenName } from '../consts'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLogin: !!localStorage.getItem(TokenName),
  },
  mutations: {
    login(state) {
      state.isLogin = true
    },
    signout(state) {
      state.isLogin = false
    },
  },
  actions: {
    signout({ commit }) {
      localStorage.removeItem(TokenName)
      commit('signout')
    },
    login({ commit }, params) {
      return login(params).then(res => {
        localStorage.setItem(TokenName, res.data.data.data.token)
        commit('login')
      })
    },
  },
})

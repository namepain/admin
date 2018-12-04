import Vue from 'vue'
import Vuex from 'vuex'

// import { Login, Logout } from '@/api/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false
  },

  getters: {
    collapsed: state => state.collapsed
  },

  mutations: {
    SET_COLLAPSED (state, payload) {
      state.collapsed = payload
    }
  },
  actions: {

    collapseMenu ({ commit, state }) {
      commit('SET_COLLAPSED', !state.collapsed)
    },

    // 用户名，密码 登录
    Login ({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        // Login(username, password).then(data => {
        //   const { token } = data
        //   commit('SET_TOKEN', token)
        resolve()
        // }).catch(e => reject(e))
      })
    },

    // 退出登录
    Logout ({ commit }) {
      return new Promise((resolve, reject) => {
        // Logout().then(data => {
        resolve()
        // })
      })
    }
  }
})

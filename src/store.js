import Vue from 'vue'
import Vuex from 'vuex'

import { Login } from '@/api/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,
    mobile: '',
    id: ''
  },

  getters: {
    collapsed: state => state.collapsed
  },

  mutations: {
    SET_MOBILE (state, payload) {
      state.mobile = payload
    },
    SET_TOKEN (state, payload) {
      state.id = payload
    },
    SET_COLLAPSED (state, payload) {
      state.collapsed = payload
    }
  },
  actions: {

    // 折叠菜单
    collapseMenu ({ commit, state }) {
      commit('SET_COLLAPSED', !state.collapsed)
    },

    // 用户名，密码 登录
    Login ({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        Login(username, password).then(data => {
          const { id, mobile } = data
          commit('SET_MOBILE', mobile)
          commit('SET_TOKEN', id)

          sessionStorage.setItem('__user__Info', JSON.stringify({ id, mobile }))

          resolve()
        }).catch(e => reject(e))
      })
    },

    // 退出登录
    Logout ({ commit }) {
      return new Promise((resolve, reject) => {
        // Logout().then(data => {

        sessionStorage.clear()

        resolve()
        // })
      })
    },

    // 前端登出
    frontLogout ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_MOBILE', '')
        commit('SET_TOKEN', '')

        sessionStorage.clear()

        resolve()
      })
    }
  }
})

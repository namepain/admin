import { Login } from '@/api/login'

export default {
  state: {
    name: '',
    token: '',
    avatar: ''
  },

  getters: {
    name: state => state.avatar,
    token: state => state.token,
    avatar: state => state.avatar
  },

  mutations: {
    SET_NAME (state, payload) {
      state.name = payload
    },
    SET_TOKEN (state, payload) {
      state.token = payload
    },
    SET_AVATAR (state, payload) {
      state.avatar = payload
    }
  },

  actions: {

    // 用户名，密码 登录
    Login ({ dispatch }, { username, password }) {
      return new Promise((resolve, reject) => {
        Login(username, password).then(data => {
          const { name, token, avatar } = data
          dispatch('handleUserInfo', data)

          sessionStorage.setItem('__user__Info', JSON.stringify({ name, token, avatar }))

          resolve()
        }).catch(e => reject(e))
      })
    },

    // 批量 commit 用户信息
    handleUserInfo ({ commit }, { name = '', token = '', avatar = '' } = {}) {
      commit('SET_NAME', name)
      commit('SET_TOKEN', token)
      commit('SET_AVATAR', avatar)
    },

    // 退出登录
    Logout () {
      return new Promise((resolve, reject) => {
        // Logout().then(data => {

        sessionStorage.clear()

        resolve()
        // })
      })
    },

    // 前端登出
    frontLogout ({ dispatch }) {
      return new Promise((resolve, reject) => {
        dispatch('handleUserInfo')

        sessionStorage.clear()

        resolve()
      })
    }

  }
}

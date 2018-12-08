export default {
  state: {
    collapsed: false,
    lang: (navigator.language === 'zh-CN' || navigator.language === 'en-US') ? navigator.language : 'zh-CN'
  },

  getters: {
    collapsed: state => state.collapsed
  },

  mutations: {
    SET_COLLAPSED (state, payload) {
      state.collapsed = payload
    },
    SET_LANG (state, payload) {
      state.lang = payload
    }
  },

  actions: {
    // 折叠菜单
    collapseMenu ({ commit, state }) {
      commit('SET_COLLAPSED', !state.collapsed)
    },

    // 设置语言
    setLang ({ commit }, language) {
      commit('SET_LANG', language)
    }
  }
}

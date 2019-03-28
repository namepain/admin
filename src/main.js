import Vue from 'vue'
import router from './router'
import store from './store'

import 'normalize.css'

import iView from 'iview'
import i18n from './lang'
import 'iview/dist/styles/iview.css'
import './common/global.less'

import directives from './common/directives'
import * as filters from './common/filters'

import App from './App.vue'

// 开发时 mock 数据
if (process.env.NODE_ENV === 'development') {
  // require('./mock')
}

// 注册全局指令
Object.keys(directives).forEach(key => Vue.directive(key, directives[key]))
// 注册全局 filter
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.config.productionTip = false

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import router from './router'
import store from './store'

import 'normalize.css'

import iView from 'iview'
import i18n from './lang'
import 'iview/dist/styles/iview.css'
import './common/global.less'

import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

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

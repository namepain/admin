import Vue from 'vue'
import router from './router'
import store from './store'

import 'normalize.css'

import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './common/global.less'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(iView)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

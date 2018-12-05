import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Layout/Login'

import store from '@/store'
import iView from 'iview'

Vue.use(Router)

const emptyView = {
  name: 'EmptyView',
  render: h => h('router-view')
}

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      redirect: '/dashboard',
      component: () => import('@/views/Layout/Home'),
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard')
        },
        {
          path: '/memberList',
          name: 'MemberList',
          component: () => import('@/views/MemberList')
        },

        // 支付宝
        {
          path: '/alipay',
          name: 'Alipay',
          redirect: '/alipayOrderList',
          component: emptyView,
          children: [
            {
              path: '/alipayOrderList',
              name: 'AlipayOrderList',
              component: () => import('@/views/AlipayOrderList/index')
            },
            {
              path: '/alipaystatisticalOrders',
              name: 'AlipaystatisticalOrders',
              component: () => import('@/views/AlipayOrderList/AlipaystatisticalOrders')
            }
          ]
        },

        // 微信
        {
          path: '/wx',
          name: 'Wx',
          redirect: '/wxOrderList',
          component: emptyView,
          children: [
            {
              path: '/wxOrderList',
              name: 'WxOrderList',
              component: () => import('@/views/WxOrderList/index')
            },
            {
              path: '/wxstatisticalOrders',
              name: 'WxstatisticalOrders',
              component: () => import('@/views/WxOrderList/WxstatisticalOrders')
            }
          ]
        },

        {
          path: '/shareSignInList',
          name: 'ShareSignInList',
          component: () => import('@/views/ShareSignInList'),
          children: [
            {
              path: '/nest1',
              name: 'nest1',
              component: () => import('@/views/nest/nest1'),
              children: [
                {
                  path: '/nest2',
                  name: 'nest2',
                  component: () => import('@/views/nest/nest2'),
                  children: [
                    {
                      path: '/nest3',
                      name: 'nest3',
                      component: () => import('@/views/nest/nest3')
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

const LOGIN_PAGE_NAME = 'Login'

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()

  let token = store.state.id

  // 刷新页面时，vuex 丢失，从 localStorage 加载
  if (!token) {
    let data = JSON.parse(sessionStorage.getItem('__user__Info'))
    if (data) {
      store.commit('SET_MOBILE', data.mobile)
      store.commit('SET_TOKEN', data.id)
      token = true
    }
  }

  if (!token && to.name !== LOGIN_PAGE_NAME) {
    next({ name: LOGIN_PAGE_NAME }) // 跳转到登录页
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    if (from.name !== 'Home') {
      next({ name: 'Home' }) // 跳转到home页
      iView.LoadingBar.finish()
    }
  } else {
    next()
  }
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store'
import iView from 'view-design'

import Login from '@/views/Layout/Login'
import user from './modules/user'

Vue.use(Router)

/**
 * meta 信息说明
 *    bread: 为 false 时不出现在 面包屑路径中
 *           为 Array 时补足面包屑路径（例如从 用户管理列表页 跳入位于路由同级的 用户编辑表单页，需要手动补足 “用户管理” 这一面包屑）
 */
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
          meta: { bread: false },
          component: () => import('@/views/Dashboard')
        }
      ]
    },

    ...user

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

const LOGIN_PAGE_NAME = 'Login'

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()

  let token = store.state.token

  // 刷新页面时，vuex 丢失，从 localStorage 加载
  if (!token) {
    let data = JSON.parse(sessionStorage.getItem('__user__Info'))
    if (data) {
      store.dispatch('handleUserInfo', data)
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

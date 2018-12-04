import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Layout/Login'

Vue.use(Router)

export default new Router({
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
        {
          path: '/shareSignInList',
          name: 'ShareSignInList',
          component: () => import('@/views/ShareSignInList')
        },

        {
          path: '/nest1',
          name: 'nest1',
          component: () => import('@/views/nest/nest1')
        },
        {
          path: '/nest2',
          name: 'nest2',
          component: () => import('@/views/nest/nest2')
        },
        {
          path: '/nest3',
          name: 'nest3',
          component: () => import('@/views/nest/nest3')
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

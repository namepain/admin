import Home from '@/views/Layout/Home'

// 用户
export default [
  {
    path: '/theUser',
    name: 'TheUser',
    redirect: '/userList',
    meta: { bread: false },
    component: Home,
    children: [
      {
        path: '/userList',
        name: 'UserList',
        component: () => import('@/views/User')
      }
    ]
  }
]

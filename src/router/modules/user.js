import Home from '@/views/Layout/Home'

// 用户
export default [
  {
    path: '/theUser',
    name: 'TheUser',
    redirect: '/userList',
    component: Home,
    children: [
      {
        path: '/userList',
        name: 'UserList',
        component: () => import('@/views/User')
      },
      {
        path: '/roleList',
        name: 'RoleList',
        component: () => import('@/views/User/RoleList')
      }
    ]
  }
]

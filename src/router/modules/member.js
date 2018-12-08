import Home from '@/views/Layout/Home'

// 用户
export default [
  {
    path: '/member',
    name: 'Member',
    redirect: '/memberList',
    component: Home,
    children: [
      {
        path: '/memberList',
        name: 'MemberList',
        component: () => import('@/views/MemberList')
      },
      {
        path: '/memberProportion',
        name: 'MemberProportion',
        component: () => import('@/views/MemberList/MemberProportion')
      },
      {
        path: '/memberLabel',
        name: 'MemberLabel',
        component: () => import('@/views/MemberList/MemberLabel')
      }
    ]
  }
]

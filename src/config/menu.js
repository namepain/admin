/**
 * name: 中文 *
 * icon: 图标 *
 * to:   对应的路由 name *
 * children: 嵌套路由
 */
export default [
  { name: 'Home', icon: 'ios-home', to: 'Dashboard' },
  {
    name: 'User',
    icon: 'md-list',
    to: 'TheUser',
    children: [
      { name: 'UserList', icon: 'md-list', to: 'UserList' },
      { name: 'Role', icon: 'md-list', to: 'RoleList' }
    ]
  }
]

/**
 * name: 中文 *
 * icon: 图标 *
 * to:   对应的路由 name *
 * children: 嵌套路由
 */
export default [
  { name: '首 页', icon: 'ios-home', to: 'Dashboard' },
  { name: '会员列表', icon: 'md-list', to: 'MemberList' },
  {
    name: '支付宝',
    icon: 'md-list',
    to: 'Alipay',
    children: [
      { name: '支付宝订单', icon: 'md-list', to: 'AlipayOrderList' },
      { name: '支付宝订单统计', icon: 'md-list', to: 'AlipaystatisticalOrders' }
    ]
  },
  {
    name: '微信',
    icon: 'md-list',
    to: 'Wx',
    children: [
      { name: '微信订单', icon: 'md-list', to: 'WxOrderList' },
      { name: '微信订单统计', icon: 'md-list', to: 'WxstatisticalOrders' }
    ]
  }
  // {
  //   name: '分享注册列表',
  //   icon: 'md-list',
  //   to: 'ShareSignInList',
  //   children: [
  //     { name: '会员列表会员列表会员列表会员列表', icon: 'md-list', to: 'MemberList' },
  //     {
  //       name: 'nest1',
  //       icon: 'md-list',
  //       to: 'nest1',
  //       children: [
  //         {
  //           name: 'nest2',
  //           icon: 'md-list',
  //           to: 'nest2',
  //           children: [
  //             { name: 'nest3', icon: 'md-list', to: 'nest3' }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
]

/**
 * name: 中文 *
 * icon: 图标 *
 * to:   对应的路由 name *
 * children: 嵌套路由
 */
export default [
  { name: '首 页', icon: 'ios-home', to: 'Dashboard' },
  {
    name: '用户',
    icon: 'md-list',
    to: 'Member',
    children: [
      { name: '用户列表', icon: 'md-list', to: 'MemberList' },
      { name: '用户分成', icon: 'md-list', to: 'MemberProportion' },
      { name: '用户标签', icon: 'md-list', to: 'MemberLabel' }
    ]
  },
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
  },
  {
    name: '通话',
    icon: 'md-list',
    to: 'CallRecord',
    children: [
      { name: '通话记录', icon: 'md-list', to: 'CallRecordList' },
      { name: '通话记录统计', icon: 'md-list', to: 'CallRecordStatis' }
    ]
  },
  {
    name: '分享注册',
    icon: 'md-list',
    to: 'ShareRegister',
    children: [
      { name: '分享注册列表', icon: 'md-list', to: 'ShareRegisterList' },
      { name: '分享注册统计', icon: 'md-list', to: 'ShareRegisterStatis' }
    ]
  },
  {
    name: '礼物记录',
    icon: 'md-list',
    to: 'Gifts',
    children: [
      { name: '礼物记录列表', icon: 'md-list', to: 'GiftsList' },
      { name: '礼物记录统计', icon: 'md-list', to: 'GiftsStatis' }
    ]
  },
  {
    name: '提现',
    icon: 'md-list',
    to: 'Withdraw',
    children: [
      { name: '提现记录', icon: 'md-list', to: 'WithdrawList' },
      { name: '待提现金额列表', icon: 'md-list', to: 'WithdrawRemain' }
    ]
  },
  {
    name: '动态',
    icon: 'md-list',
    to: 'Dynamics',
    children: [
      { name: '动态被查看记录', icon: 'md-list', to: 'DynamicsList' },
      { name: '动态被查看统计', icon: 'md-list', to: 'DynamicsStatis' }
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

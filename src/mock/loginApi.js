const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    name: '管理员',
    avatar: 'http://img.sxwhome.com/FlWJKh8gqQ9foxY028FtVIpK9m1o'
  }
}

export default {
  login: () => {
    return {
      status: '1001',
      tips: '登陆成功',
      data: userMap['admin']
    }
  },
  logout: () => {
    return { status: '1001', tips: '退出登录成功' }
  }
}

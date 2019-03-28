import request from '@/common/request'

/**
 * 用户名密码登录
 * @param {String} username
 * @param {String} password
 */
export function Login (username, password) {
  // return request({
  //   url: '/login/login',
  //   method: 'post',
  //   params: {
  //     username,
  //     password
  //   }
  // })
  return Promise.resolve({
    name: 'admin',
    token: 'admin',
    avatar: 'https://avatars1.githubusercontent.com/u/19219970?s=80&v=4'
  })
}

/**
 * 注销
 */
export function Logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

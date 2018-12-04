import request from '@/common/request'

/**
 * 用户名密码登录
 * @param {String} username
 * @param {String} password
 */
export function Login (username, password) {
  return request({
    url: '/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

/**
 * 注销
 */
export function Logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}

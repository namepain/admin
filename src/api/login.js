import request from '@/common/request'

/**
 * 用户名密码登录
 * @param {String} username
 * @param {String} password
 */
export function Login (username, password) {
  return request({
    url: '/login/login',
    method: 'post',
    params: {
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
    url: '/login/logout',
    method: 'post'
  })
}

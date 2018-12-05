import request from '@/common/request'

/**
 * 用户名密码登录
 * @param {String} username
 * @param {String} password
 */
export function Login (mobile, password) {
  return request({
    url: '/user/adminlogin',
    method: 'get',
    params: {
      mobile,
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

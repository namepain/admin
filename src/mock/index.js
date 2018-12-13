import Mock from 'mockjs'
import loginApi from './loginApi.js'
import userApi from './userApi.js'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function (...args) {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...args)
}

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginApi.login)
Mock.mock(/\/login\/logout/, 'post', loginApi.logout)

// 系统用户
Mock.mock(/\/users\/getUserList/, 'get', userApi.getUserList)
Mock.mock(/\/users\/getRoleList/, 'get', userApi.getRoleList)

export default Mock

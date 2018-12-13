import Axios from 'axios'
import { Message } from 'iview'

const service = Axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'api/' : '/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

service.interceptors.request.use(config => {
  return config
})

service.interceptors.response.use(({ data: { data, status, tips } = {} }) => {
  if (status !== '1001') {
    console.log(tips)
    tips && Message.error(tips)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject()
  } else {
    return data
  }
}, error => {
  Message.error('请求出现了错误 :(')
  return Promise.reject(error)
})

export default service

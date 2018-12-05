import request from '@/common/request'

/**
 * GET /user/selectuserbychoose 用户信息模糊查询
 */
export function selectuserbychoose (nickname, phone, pageNum, pageSize) {
  return request({
    url: '/user/selectuserbychoose',
    method: 'get',
    params: {
      nickname,
      phone,
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/selectAlipayOrders 查询支付宝订单记录接口
 */
export function selectAlipayOrders (pageNum, pageSize) {
  return request({
    url: '/user/selectAlipayOrders',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/selectAlipaystatisticalOrders 查询支付宝统计订单记录接口
 */
export function selectAlipaystatisticalOrders (pageNum, pageSize) {
  return request({
    url: '/user/selectAlipaystatisticalOrders',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/selectWxOrders 查询微信订单记录接口
 */
export function selectWxOrders (pageNum, pageSize) {
  return request({
    url: '/user/selectWxOrders',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/selectWxstatisticalOrders 查询微信统计订单记录接口
 */
export function selectWxstatisticalOrders (pageNum, pageSize) {
  return request({
    url: '/user/selectWxstatisticalOrders',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

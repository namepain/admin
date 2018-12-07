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
 * GET /user/noticeUserUploadVoice 通知用户上传遇音
 */
export function noticeUserUploadVoice (mobile, platform, sex) {
  return request({
    url: '/user/noticeUserUploadVoice',
    method: 'get',
    params: {
      mobile, platform, sex
    }
  })
}

/**
 * GET /user/wakeUpBymobile 通知用户上传遇音
 */
export function wakeUpBymobile (mobile, coin) {
  return request({
    url: '/user/wakeUpBymobile',
    method: 'get',
    params: {
      mobile, coin
    }
  })
}

/**
 * GET /user/selectAllproportion 用户的分成比例列表查询
 */
export function selectAllproportion (mobile, pageNum, pageSize) {
  return request({
    url: '/user/selectAllproportion',
    method: 'get',
    params: {
      mobile,
      pageNum,
      pageSize
    }
  })
}
/**
 * GET /user/UpdateUserproportion 修改用户的分成比例
 */
export function UpdateUserproportion (params) {
  return request({
    url: '/user/UpdateUserproportion',
    method: 'get',
    params
  })
}

/**
 * GET /user/selectUserLabelAll 查询用户标签
 */
export function selectUserLabelAll (nickname, pageNum, pageSize) {
  return request({
    url: '/user/selectUserLabelAll',
    method: 'get',
    params: {
      nickname,
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/deleteUserLabelByid 删除用户标签
 */
export function deleteUserLabelByid (id) {
  return request({
    url: '/user/deleteUserLabelByid',
    method: 'get',
    params: {
      id
    }
  })
}

/**
 * GET /user/addUserLabel 新增用户标签
 */
export function addUserLabel (params) {
  return request({
    url: '/user/addUserLabel',
    method: 'get',
    params
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

/**
 * GET /user/getAllCallList 查询通话记录接口
 */
export function getAllCallList (pageNum, pageSize) {
  return request({
    url: '/user/getAllCallList',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/getAllCallstatisticalList 查询通话记录统计接口
 */
export function getAllCallstatisticalList (pageNum, pageSize) {
  return request({
    url: '/user/getAllCallstatisticalList',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/getShareRegister 查询分享注册记录接口
 */
export function getShareRegister (pageNum, pageSize) {
  return request({
    url: '/user/getShareRegister',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/getShareRegisterStatistical 查询通话记录统计接口
 */
export function getShareRegisterStatistical (pageNum, pageSize) {
  return request({
    url: '/user/getShareRegisterStatistical',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/selectAllSendGift 查询礼物赠送接口
 */
export function selectAllSendGift (pageNum, pageSize) {
  return request({
    url: '/user/selectAllSendGift',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/getliststatisticalgift 查询礼物赠送统计接口
 */
export function getliststatisticalgift (pageNum, pageSize) {
  return request({
    url: '/user/getliststatisticalgift',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/getTiXianList 查询提现列表接口
 */
export function getTiXianList (pageNum, pageSize) {
  return request({
    url: '/user/getTiXianList',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/getAllUserTiXian 查询所有用户待提现金额列表接口
 */
export function getAllUserTiXian (pageNum, pageSize) {
  return request({
    url: '/user/getAllUserTiXian',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/withdrawalcheck 查询所有用户待提现金额列表接口
 */
export function withdrawalcheck (id, mobile) {
  return request({
    url: '/user/withdrawalcheck',
    method: 'get',
    params: {
      id,
      mobile
    }
  })
}

/**
 * GET /user/getWhoSeeListLog 查询所有的动态被查看记录接口
 */
export function getWhoSeeListLog (pageNum, pageSize) {
  return request({
    url: '/user/getWhoSeeListLog',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

/**
 * GET /user/getWhoSeeListstatisticalLog 查询所有的动态被查看记录统计接口
 */
export function getWhoSeeListstatisticalLog (pageNum, pageSize) {
  return request({
    url: '/user/getWhoSeeListstatisticalLog',
    method: 'get',
    params: {
      pageNum,
      pageSize
    }
  })
}

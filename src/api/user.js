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

/** *************************** 权限管理 ***************************/
/**
 * GET /users/getUserList 获取系统用户列表
 */
export function getUserList (params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}

/**
 * GET /users/getRoleList 获取系统用户列表
 */
export function getRoleList (params) {
  return request({
    url: '/roles',
    method: 'get',
    params
  })
}

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

/** ************* 用户管理 ******************/
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
 * POST /users/ 保存用户
 */
export function saveUser (data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

/**
 * PUT /users/ 保存用户
 */
export function updateUser (id, data) {
  return request({
    url: `/users/${id}`,
    method: 'put',
    data
  })
}

/**
 * DELETE /users/ 保存用户
 */
export function deleteUser (id) {
  return request({
    url: `/users/${id}`,
    method: 'delete'
  })
}

/**
 * POST /users/ 保存用户角色
 */
export function setUserRoles (userId, roleIds) {
  return request({
    url: `/users/setUserRoles`,
    method: 'post',
    data: { userId, roleIds }
  })
}

/** ************* 角色管理 ******************/
/**
 * GET /roles/getRoleList 获取系统角色列表
 */
export function getRoleList (params) {
  return request({
    url: '/roles',
    method: 'get',
    params
  })
}

/**
 * GET /roles/getRoleList 获取全部系统角色（无分页
 */
export function getAllRoleList () {
  return request({
    url: '/roles/getAllRoleList',
    method: 'get'
  })
}

/**
 * POST /roles/ 保存角色
 */
export function saveRole (data) {
  return request({
    url: '/roles',
    method: 'post',
    data
  })
}

/**
 * PUT /roles/ 保存角色
 */
export function updateRole (id, data) {
  return request({
    url: `/roles/${id}`,
    method: 'put',
    data
  })
}

/**
 * DELETE /roles/ 保存角色
 */
export function deleteRole (id) {
  return request({
    url: `/roles/${id}`,
    method: 'delete'
  })
}

export function addResource (data) {
  return request({
    url: `/roles/addResource`,
    method: 'post',
    data: { data }
  })
}

/**
 * 根据角色Id获取角色资源
 */
export function getResourceByRoleId (roleId) {
  return request({
    url: `/roles/getResourcesByRole/${roleId}`,
    method: 'get'
  })
}

/**
 * 根据角色Id存储角色资源
 */
export function saveRoleResource (roleId, data) {
  return request({
    url: `/roles/saveRoleResource/${roleId}`,
    method: 'post',
    data: { data }
  })
}

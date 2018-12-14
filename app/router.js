'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 授权角色
  router.post('/users/setUserRoles', controller.user.setUserRoles);

  // 系统用户
  router.resources('user', '/users', controller.user);

  // 系统角色
  router.get('/roles/getAllRoleList', controller.role.getAll);
  router.resources('role', '/roles', controller.role);
};

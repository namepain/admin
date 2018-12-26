'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 授权角色
  router.get('/users/getResourcesByUser/:id', controller.user.getResourcesByUser);
  router.post('/users/setUserRoles', controller.user.setUserRoles);
  router.resources('user', '/users', controller.user);


  // 系统角色
  router.get('/roles/getAllRoleList', controller.role.getAll);
  // 根据角色获取资源
  router.get('/roles/getResourcesByRole/:id', controller.role.getResourcesByRole);
  router.post('/roles/addResource', controller.role.addResource);
  router.post('/roles/saveRoleResource/:id', controller.role.saveRoleResource);
  router.resources('role', '/roles', controller.role);
};

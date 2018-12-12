'use strict';

const { factory } = require('factory-girl');

module.exports = app => {
  // 可以通过 app.factory 访问 factory 实例
  app.factory = factory;

  // 定义 user 和默认数据
  factory.define('user', app.model.User, {
    name: factory.sequence('User.name', n => `user_name_${n}`),
    desc: factory.sequence('User.desc', n => `user_desc_${n}`),
    remark: factory.sequence('User.remark', n => `user_remark_${n}`),
  });
  // 定义 role 和默认数据
  factory.define('role', app.model.Role, {
    name: factory.sequence('Role.name', n => `role_name_${n}`),
    desc: factory.sequence('Role.desc', n => `drole_esc_${n}`),
    remark: factory.sequence('Role.remark', n => `role_remark_${n}`),
  });
};

'use strict';

// had enabled by egg
// exports.static = true;

// 使用 sequelize
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

// 开启 validate
exports.validate = {
  enable: true,
  package: 'egg-validate',
};

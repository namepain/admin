'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_chenheng';

  // add your config here
  config.middleware = [];

  // sequelize
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'rbac_dev',
  };

  // csrf
  config.security = {
    csrf: {
      enable: false,
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  return config;
};


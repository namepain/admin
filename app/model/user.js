'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    desc: STRING(32),
    remark: STRING(64),
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'user',
  });

  return User;
};

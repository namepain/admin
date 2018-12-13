'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const UserRole = app.model.define('userRole', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER },
    role_id: { type: INTEGER },
  }, {
    timestamps: false,
    tableName: 'user_role',
  });

  return UserRole;
};

'use strict';

module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const RoleResource = app.model.define('roleResource', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    role_id: { type: INTEGER },
    resource_id: { type: INTEGER },
  }, {
    timestamps: false,
    tableName: 'role_resource',
  });

  return RoleResource;
};

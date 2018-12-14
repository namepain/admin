'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Role = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    desc: STRING(32),
    remark: STRING(64),
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'role',
  });

  Role.associate = function() {
    app.model.Role.belongsToMany(app.model.User, {
      // as: 'user',
      through: app.model.UserRole,
      foreignKey: 'role_id',
    });
  };

  Role.beforeBulkUpdate(role => {
    role.attributes.updated_at = new Date();
    return role;
  });

  return Role;
};

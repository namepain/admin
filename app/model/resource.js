'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Resource = app.model.define('resource', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    desc: STRING(32),
    remark: STRING(64),
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'resource',
  });

  Resource.associate = function() {
    app.model.Resource.belongsToMany(app.model.Role, {
      through: app.model.RoleResource,
      foreignKey: 'resource_id',
    });
  };

  Resource.beforeBulkUpdate(resource => {
    resource.attributes.updated_at = new Date();
    return resource;
  });

  return Resource;
};

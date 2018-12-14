'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    desc: STRING(32),
    remark: STRING(64),
    status: INTEGER,
    password: { type: STRING(30), defaultValue: '666666' },
    created_at: DATE,
    updated_at: DATE,
  }, {
    tableName: 'user',
  });

  User.associate = function() {
    app.model.User.belongsToMany(app.model.Role, {
      // as: 'role',
      through: 'userRole',
      foreignKey: 'user_id',
    });
  };

  User.beforeBulkUpdate(user => {
    user.attributes.updated_at = new Date();
    return user;
  });

  return User;
};

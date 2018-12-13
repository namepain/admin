'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('user', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      desc: STRING(32),
      remark: STRING(64),
      status: INTEGER,
      password: STRING(30),
      created_at: DATE,
      updated_at: DATE,
    });

    await queryInterface.createTable('user_role', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: INTEGER },
      role_id: { type: INTEGER },
    });

    await queryInterface.createTable('role', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      desc: STRING(32),
      remark: STRING(64),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('user');

    await queryInterface.dropTable('user_role');

    await queryInterface.dropTable('role');
  },
};

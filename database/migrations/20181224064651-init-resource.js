'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('resource', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      desc: STRING(32),
      remark: STRING(64),
      created_at: DATE,
      updated_at: DATE,
    });

    await queryInterface.createTable('role_resource', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      role_id: { type: INTEGER },
      resource_id: { type: INTEGER },
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('role_resource');

    await queryInterface.dropTable('resource');
  },
};

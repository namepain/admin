'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
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
    await queryInterface.dropTable('role');
  },
};

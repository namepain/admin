'use strict';

module.exports = {
  up: async queryInterface => {
    const user = await queryInterface.bulkInsert('user', [{
      id: 1,
      name: 'admin',
      desc: '管理员',
      remark: '',
      status: 0,
      password: '666666',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

    const role = await queryInterface.bulkInsert('role', [{
      id: 1,
      name: 'admin',
      desc: '管理员',
      remark: '',
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

    console.log(user, role);

    await queryInterface.bulkInsert('user_role', [{
      id: 1,
      user_id: 1,
      role_id: 1,
    }]);
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('user', { id: 1 });
    await queryInterface.bulkDelete('role', { id: 1 });
    await queryInterface.bulkDelete('user_role', { id: 1 });
  },
};

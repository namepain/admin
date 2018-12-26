'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async list({ offset = 0, limit = 10 }) {
    return await this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],

      include: [{
        model: this.ctx.model.Role,
        attributes: [ 'id', 'name' ], // role 表的字段
        through: {
          attributes: [ ], // user_role 表的字段
          model: this.ctx.model.UserRole,
        },
      }],
    });
  }

  async find(id) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }

  async create(user) {
    return await this.ctx.model.User.create(user);
  }

  async update({ id, updates }) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return await user.update(updates);
  }

  async destroy(id) {
    const user = await this.ctx.model.User.findById(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    if (user.name === 'admin') {
      this.ctx.throw(422, 'can not delete admin');
    }
    return await user.destroy();
  }

  async setUserRoles(user_id, role_ids) {
    const userRole = this.ctx.model.UserRole;
    await userRole.destroy({
      where: { user_id },
    });
    const records = role_ids.map(role_id => ({ role_id, user_id }));
    console.log(role_ids, records);
    await userRole.bulkCreate(records);
  }

  async getResourcesByUser(userId) {
    const userRoles = await this.ctx.model.User.find({
      where: { id: userId },
      include: [{
        require: true,
        model: this.ctx.model.Role,
        attributes: [ 'id' ],
        through: {
          attributes: [],
          model: this.ctx.model.UserRole,
        },
      }],
    });
    if (!userRoles) {
      return [];
    }
    const roleIds = userRoles.roles.map(v => v.id);
    console.log(roleIds);

    return await this.ctx.model.Resource.findAll({
      include: [{
        require: true,
        attributes: [],
        model: this.ctx.model.Role,
        where: { id: { in: roleIds } },
        through: {
          attributes: [],
          model: this.ctx.model.RoleResource,
        },
      }],
    });
  }
}

module.exports = UserService;

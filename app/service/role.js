'use strict';

const Service = require('egg').Service;

class RoleService extends Service {
  async list({ offset = 0, limit = 10 }) {
    return await this.ctx.model.Role.findAndCountAll({
      offset,
      limit,
      order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
      include: [{
        model: this.ctx.model.User,
        // through: {
        //   model: this.ctx.model.userRole,
        //   attributes: [ 'name' ],
        // },
      }],
    });
  }

  async find(id) {
    const role = await this.ctx.model.Role.findById(id);
    if (!role) {
      this.ctx.throw(404, 'role not found');
    }
    return role;
  }

  async create(role) {
    return await this.ctx.model.Role.create(role);
  }

  async update({ id, updates }) {
    const role = await this.ctx.model.Role.findById(id);
    if (!role) {
      this.ctx.throw(404, 'role not found');
    }
    return await role.update(updates);
  }

  async destroy(id) {
    const role = await this.ctx.model.Role.findById(id);
    if (!role) {
      this.ctx.throw(404, 'role not found');
    }
    return await role.destroy();
  }
}

module.exports = RoleService;

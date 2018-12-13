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
        attributes: [ 'name' ], // role 表的字段
        through: {
          attributes: [ ], // user_role 表的字段
          model: this.ctx.model.userRole,
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
    return await user.destroy();
  }
}

module.exports = UserService;

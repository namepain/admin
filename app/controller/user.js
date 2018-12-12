'use strict';

const Controller = require('egg').Controller;

class UsersController extends Controller {
  async index() {
    const ctx = this.ctx;
    const { pageNum = 1, pageSize = 10 } = ctx.query;
    const query = {
      offset: ctx.helper.parseOffset(pageNum, pageSize),
      limit: ctx.helper.parseInt(pageSize),
    };
    ctx.body = await ctx.service.user.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.user.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const updates = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.user.destroy(id);
    ctx.status = 200;
  }

}

module.exports = UsersController;

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
    const res = await ctx.service.user.list(query);
    ctx.success(res);
  }

  async show() {
    const ctx = this.ctx;
    const res = await ctx.service.user.find(ctx.helper.parseInt(ctx.params.id));
    ctx.success(res);
  }

  async create() {
    const ctx = this.ctx;
    const user = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    const res = user;
    ctx.success(res);
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const updates = ctx.request.body;
    const res = await ctx.service.user.update({ id, updates });
    ctx.success(res);
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.user.destroy(id);
    ctx.success();
  }

}

module.exports = UsersController;

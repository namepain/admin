'use strict';

const Controller = require('egg').Controller;

class RolesController extends Controller {
  async index() {
    const ctx = this.ctx;
    const { pageNum = 1, pageSize = 10 } = ctx.query;
    const query = {
      offset: ctx.helper.parseOffset(pageNum, pageSize),
      limit: ctx.helper.parseInt(pageSize),
    };
    ctx.body = await ctx.service.role.list(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.service.role.find(ctx.helper.parseInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const role = await ctx.service.role.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = role;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const updates = ctx.request.body;
    ctx.body = await ctx.service.role.update({ id, updates });
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.role.destroy(id);
    ctx.status = 200;
  }

}

module.exports = RolesController;

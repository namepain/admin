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
    const res = await ctx.service.role.list(query);
    ctx.success(res);
  }

  async show() {
    const ctx = this.ctx;
    const res = await ctx.service.role.find(ctx.helper.parseInt(ctx.params.id));
    ctx.success(res);
  }

  async create() {
    const ctx = this.ctx;
    const role = await ctx.service.role.create(ctx.request.body);
    ctx.status = 201;
    const res = role;
    ctx.success(res);
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const updates = ctx.request.body;
    const res = await ctx.service.role.update({ id, updates });
    ctx.success(res);
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.role.destroy(id);
    ctx.success();
  }

  async getAll() {
    const ctx = this.ctx;
    const allRoles = await ctx.service.role.getAllRoles();
    ctx.success(allRoles);
  }

}

module.exports = RolesController;

'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/role.test.js', () => {
  let ctx;

  beforeEach(() => {
    ctx = app.mockContext();
  });

  describe('list()', () => {
    beforeEach(async () => {
      await app.factory.createMany('role', 11);
    });
    it('should found list', async () => {
      const res = await ctx.service.role.list({ offset: 0, limit: 10 });
      assert(res.count === 11);
      assert(res.rows.length === 10);
      assert(res.rows[0].name);
    });
    it('should found list', async () => {
      const res = await ctx.service.role.list({});
      assert(res.count === 11);
      assert(res.rows.length === 10);
      assert(res.rows[0].name);
    });
    it('should found list', async () => {
      const res = await ctx.service.role.list({ offset: 0 });
      assert(res.count === 11);
      assert(res.rows.length === 10);
      assert(res.rows[0].name);
    });
    it('should found list', async () => {
      const res = await ctx.service.role.list({ limit: 10 });
      assert(res.count === 11);
      assert(res.rows.length === 10);
      assert(res.rows[0].name);
    });
  });

  describe('find()', () => {
    it('should not found role', async () => {
      try {
        await ctx.service.role.find(-1);
      } catch (e) {
        assert(e.status === 404);
        assert(e.message === 'role not found');
        return;
      }
      throw 'should not run here';
    });
  });

  describe('update()', () => {
    it('should not found role', async () => {
      try {
        await ctx.service.role.update({});
      } catch (e) {
        assert(e.status === 404);
        assert(e.message === 'role not found');
        return;
      }
      throw 'should not run here';
    });
  });

  describe('destroy()', () => {
    it('should not found role', async () => {
      try {
        await ctx.service.role.destroy(-1);
      } catch (e) {
        assert(e.status === 404);
        assert(e.message === 'role not found');
        return;
      }
      throw 'should not run here';
    });
  });


});

'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/users.test.js', () => {
  let ctx;

  beforeEach(() => {
    ctx = app.mockContext();
  });

  describe('find()', () => {
    it('should not found user', async () => {
      try {
        await ctx.service.user.find(-1);
      } catch (e) {
        assert(e.status === 404);
        assert(e.message === 'user not found');
        return;
      }
      throw 'should not run here';
    });
  });

  describe('update()', () => {
    it('should not found user', async () => {
      try {
        await ctx.service.user.update({});
      } catch (e) {
        assert(e.status === 404);
        assert(e.message === 'user not found');
        return;
      }
      throw 'should not run here';
    });
  });

  describe('destroy()', () => {
    it('should not found user', async () => {
      try {
        await ctx.service.user.destroy(-1);
      } catch (e) {
        assert(e.status === 404);
        assert(e.message === 'user not found');
        return;
      }
      throw 'should not run here';
    });
  });


});

'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/users.test.js', () => {

  describe('GET /users', () => {
    beforeEach(async () => {
      await app.factory.createMany('user', 3);
    });

    it('should get two rows and count three', async () => {
      const res = await app.httpRequest().get('/users?pageNum=1&pageSize=2');
      assert(res.status === 200);
      assert(res.body.data.total === 3);
      assert(res.body.data.list.length === 2);
      assert(res.body.data.list[0].name);
      assert(res.body.data.list[0].desc);
      assert(res.body.data.list[0].remark);
    });
    it('should get two rows and count three', async () => {
      const res = await app.httpRequest().get('/users?pageSize=2');
      assert(res.status === 200);
      assert(res.body.data.total === 3);
      assert(res.body.data.list.length === 2);
      assert(res.body.data.list[0].name);
      assert(res.body.data.list[0].desc);
      assert(res.body.data.list[0].remark);
    });
    it('should get three rows and count three', async () => {
      const res = await app.httpRequest().get('/users?pageNum=1');
      assert(res.status === 200);
      assert(res.body.data.total === 3);
      assert(res.body.data.list.length === 3);
      assert(res.body.data.list[0].name);
      assert(res.body.data.list[0].desc);
      assert(res.body.data.list[0].remark);
    });
    it('should get three rows and count three', async () => {
      const res = await app.httpRequest().get('/users');
      assert(res.status === 200);
      assert(res.body.data.total === 3);
      assert(res.body.data.list.length === 3);
      assert(res.body.data.list[0].name);
      assert(res.body.data.list[0].desc);
      assert(res.body.data.list[0].remark);
    });
  });

  describe('GET /users/:id', () => {
    it('should get user', async () => {
      const user = await app.factory.create('user');
      const res = await app.httpRequest().get(`/users/${user.id}`);
      assert(res.status === 200);
      assert(res.body.data.name === user.name);
      assert(res.body.data.desc === user.desc);
      assert(res.body.data.remark === user.remark);
    });
  });

  describe('POST /users', () => {
    it('should work', async () => {
      let res = await app.httpRequest().post('/users')
        .send({
          name: 'name',
          desc: 'desc',
          remark: 'remark',
        });
      assert(res.status === 201);
      assert(res.body.data.id);

      res = await app.httpRequest().get(`/users/${res.body.data.id}`);
      assert(res.status === 200);
      assert(res.body.data.name === 'name');
    });
  });

  describe('PUT /users', () => {
    it('should be update', async () => {
      const user = await app.factory.create('user');
      const res = await app.httpRequest().put(`/users/${user.id}`)
        .send({
          name: user.name + '_name',
          desc: user.desc + '_desc',
          remark: user.remark + '_remark',
        });
      assert(res.status === 200);
      assert(res.body.data.name === user.name + '_name');
      assert(res.body.data.desc === user.desc + '_desc');
      assert(res.body.data.remark === user.remark + '_remark');
    });
  });

  describe('DELETE /users/:id', () => {
    it('should work', async () => {
      const user = await app.factory.create('user');

      const res = await app.httpRequest().delete(`/users/${user.id}`);
      assert(res.status === 200);
    });
  });
});

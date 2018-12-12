'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/users.test.js', () => {

  describe('GET /users', () => {
    it('should get two rows and count three', async () => {
      await app.factory.createMany('user', 3);
      const res = await app.httpRequest().get('/users?pageNum=1&pageSize=2');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 2);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].desc);
      assert(res.body.rows[0].remark);
    });
    it('should get two rows and count three', async () => {
      await app.factory.createMany('user', 3);
      const res = await app.httpRequest().get('/users?pageSize=2');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 2);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].desc);
      assert(res.body.rows[0].remark);
    });
    it('should get three rows and count three', async () => {
      await app.factory.createMany('user', 3);
      const res = await app.httpRequest().get('/users?pageNum=1');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 3);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].desc);
      assert(res.body.rows[0].remark);
    });
    it('should get three rows and count three', async () => {
      await app.factory.createMany('user', 3);
      const res = await app.httpRequest().get('/users');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 3);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].desc);
      assert(res.body.rows[0].remark);
    });
  });

  describe('GET /users/:id', () => {
    it('should get user', async () => {
      const user = await app.factory.create('user');
      const res = await app.httpRequest().get(`/users/${user.id}`);
      assert(res.status === 200);
      assert(res.body.name === user.name);
      assert(res.body.desc === user.desc);
      assert(res.body.remark === user.remark);
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
      assert(res.body.id);

      res = await app.httpRequest().get(`/users/${res.body.id}`);
      assert(res.status === 200);
      assert(res.body.name === 'name');
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
      assert(res.body.name === user.name + '_name');
      assert(res.body.desc === user.desc + '_desc');
      assert(res.body.remark === user.remark + '_remark');
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

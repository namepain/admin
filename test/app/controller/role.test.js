'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/roles.test.js', () => {

  describe('GET /roles', () => {
    it('should get two rows and count three', async () => {
      await app.factory.createMany('role', 3);
      const res = await app.httpRequest().get('/roles?pageNum=1&pageSize=2');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 2);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].desc);
      assert(res.body.rows[0].remark);
    });
    it('should get two rows and count three', async () => {
      await app.factory.createMany('role', 3);
      const res = await app.httpRequest().get('/roles?pageSize=2');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 2);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].desc);
      assert(res.body.rows[0].remark);
    });
    it('should get three rows and count three', async () => {
      await app.factory.createMany('role', 3);
      const res = await app.httpRequest().get('/roles?pageNum=1');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 3);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].desc);
      assert(res.body.rows[0].remark);
    });
    it('should get three rows and count three', async () => {
      await app.factory.createMany('role', 3);
      const res = await app.httpRequest().get('/roles');
      assert(res.status === 200);
      assert(res.body.count === 3);
      assert(res.body.rows.length === 3);
      assert(res.body.rows[0].name);
      assert(res.body.rows[0].desc);
      assert(res.body.rows[0].remark);
    });
  });

  describe('GET /roles/:id', () => {
    it('should get role', async () => {
      const role = await app.factory.create('role');
      const res = await app.httpRequest().get(`/roles/${role.id}`);
      assert(res.status === 200);
      assert(res.body.name === role.name);
      assert(res.body.desc === role.desc);
      assert(res.body.remark === role.remark);
    });
  });

  describe('POST /roles', () => {
    it('should work', async () => {
      let res = await app.httpRequest().post('/roles')
        .send({
          name: 'name',
          desc: 'desc',
          remark: 'remark',
        });
      assert(res.status === 201);
      assert(res.body.id);

      res = await app.httpRequest().get(`/roles/${res.body.id}`);
      assert(res.status === 200);
      assert(res.body.name === 'name');
    });
  });

  describe('PUT /roles', () => {
    it('should be update', async () => {
      const role = await app.factory.create('role');
      const res = await app.httpRequest().put(`/roles/${role.id}`)
        .send({
          name: role.name + '_name',
          desc: role.desc + '_desc',
          remark: role.remark + '_remark',
        });
      assert(res.status === 200);
      assert(res.body.name === role.name + '_name');
      assert(res.body.desc === role.desc + '_desc');
      assert(res.body.remark === role.remark + '_remark');
    });
  });

  describe('DELETE /roles/:id', () => {
    it('should work', async () => {
      const role = await app.factory.create('role');

      const res = await app.httpRequest().delete(`/roles/${role.id}`);
      assert(res.status === 200);
    });
  });
});

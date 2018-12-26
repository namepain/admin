'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/roles.test.js', () => {

  describe('GET /roles', () => {
    beforeEach(async () => {
      await app.factory.createMany('role', 3);
    });
    it('should get two rows and count three', async () => {
      const res = await app.httpRequest().get('/roles?pageNum=1&pageSize=2');
      assert(res.status === 200);
      assert(res.body.data.total === 3);
      assert(res.body.data.list.length === 2);
      assert(res.body.data.list[0].name);
      assert(res.body.data.list[0].desc);
      assert(res.body.data.list[0].remark);
    });
    it('should get two rows and count three', async () => {
      const res = await app.httpRequest().get('/roles?pageSize=2');
      assert(res.status === 200);
      assert(res.body.data.total === 3);
      assert(res.body.data.list.length === 2);
      assert(res.body.data.list[0].name);
      assert(res.body.data.list[0].desc);
      assert(res.body.data.list[0].remark);
    });
    it('should get three rows and count three', async () => {
      const res = await app.httpRequest().get('/roles?pageNum=1');
      assert(res.status === 200);
      assert(res.body.data.total === 3);
      assert(res.body.data.list.length === 3);
      assert(res.body.data.list[0].name);
      assert(res.body.data.list[0].desc);
      assert(res.body.data.list[0].remark);
    });
    it('should get three rows and count three', async () => {
      const res = await app.httpRequest().get('/roles');
      assert(res.status === 200);
      assert(res.body.data.total === 3);
      assert(res.body.data.list.length === 3);
      assert(res.body.data.list[0].name);
      assert(res.body.data.list[0].desc);
      assert(res.body.data.list[0].remark);
    });
  });

  describe('GET /roles/:id', () => {
    it('should get role', async () => {
      const role = await app.factory.create('role');
      const res = await app.httpRequest().get(`/roles/${role.id}`);
      assert(res.status === 200);
      assert(res.body.data.name === role.name);
      assert(res.body.data.desc === role.desc);
      assert(res.body.data.remark === role.remark);
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
      assert(res.body.data.id);

      res = await app.httpRequest().get(`/roles/${res.body.data.id}`);
      assert(res.status === 200);
      assert(res.body.data.name === 'name');
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
      assert(res.body.data.name === role.name + '_name');
      assert(res.body.data.desc === role.desc + '_desc');
      assert(res.body.data.remark === role.remark + '_remark');
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
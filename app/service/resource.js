'use strict';

const Service = require('egg').Service;

module.exports = () => {

  class ResourceService extends Service {

    async getResourcesByRoleId(roleId) {
      return await this.ctx.model.Resource.findAll({
        attributes: [ 'name' ],
        include: [{
          attributes: [ ],
          model: this.ctx.model.Role,
          where: { id: roleId },
          through: {
            model: this.ctx.model.RoleResource,
          },
        }],
      });
    }

    async addResource(data) {
      let resources = await this.ctx.model.Resource.findAll();
      resources = resources.map(v => v.name);

      const records = data.map(v => {
        return resources.includes(v) ? '' : ({ name: v });
      }).filter(v => v);

      await this.ctx.model.Resource.bulkCreate(records);
      return await this.ctx.model.Resource.findAll();
    }

    async saveRoleResource(roleId, data) {
      const resourceIds = await this.ctx.model.Resource.findAll({ attributes: [ 'id' ], where: { name: { in: data } } }).map(v => v.id);
      console.log('resourceIds-------------> ' + resourceIds);
      const records = resourceIds.map(v => ({ role_id: roleId, resource_id: v }));

      await this.ctx.model.RoleResource.destroy({ where: { role_id: roleId } });
      await this.ctx.model.RoleResource.bulkCreate(records);
    }

  }
  return ResourceService;
};


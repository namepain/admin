<template>
  <Card :bordered="false" dis-hover>
    <p slot="title">角色所拥有资源</p>

    <p>当前角色：{{ role.name }}</p>

    <Button type="success" @click="save" class="mt10 mb10">保存权限</Button>
    <Tree ref="tree" :data="data2" show-checkbox></Tree>
  </Card>
</template>

<script>
import { addResource, getResourceByRoleId, saveRoleResource } from '@/api/user'
import menuList from '@/config/menu'
import { flattenObjKey } from '@/common/util'

export default {
  name: 'RoleResource',
  data () {
    return {
      role: this.$route.params,
      curResources: [],
      data2: []
    }
  },

  created () {
    if (!this.role || !this.role.id) {
      this.$router.push({ name: 'RoleList' })
      return
    }

    this.addResource() // 进入此页面就把前端所有资源（所有菜单的name）向后端提交
    this.getCurResource().then(() => { // 获取当前角色所拥有的资源，后渲染出资源树
      this.data2 = this.initResources(menuList)
    })
  },

  methods: {

    // 将前端资源提交到数据库
    addResource () {
      const data = flattenObjKey(menuList, 'children').map(v => v.name)
      addResource(data)
    },

    // 得到当前角色的资源
    getCurResource () {
      return getResourceByRoleId(this.role.id).then(data => {
        this.curResources = data
      })
    },

    // generate all resource the system have
    initResources (arr) {
      let res = arr.map(menu => {
        let treeNode = {
          title: menu.name,
          checked: !menu.children && this.curResources.indexOf(menu.name) > -1,
          expand: true
        }
        if (menu.children) {
          treeNode.children = this.initResources(menu.children)
        }
        return treeNode
      })
      return res
    },

    // getCheckedAndIndeterminateNodes
    save () {
      let resources = this.$refs['tree'].getCheckedAndIndeterminateNodes()
      resources = resources.map(v => v.title)
      console.log(resources)
      saveRoleResource(this.role.id, resources).then(data => {
        this.$Message.success('授权成功！！')
      })
    }

  }
}
</script>

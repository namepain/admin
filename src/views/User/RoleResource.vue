<template>
  <Card :bordered="false" dis-hover>
    <p slot="title">角色所拥有资源</p>

    <p>当前角色：{{ role.name }}</p>
    <Tree :data="data2" show-checkbox></Tree>
  </Card>
</template>

<script>
import menuList from '@/config/menu'

export default {
  name: 'RoleResource',
  data () {
    return {
      role: this.$route.params || {},
      data2: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },

  created () {
    this.initResources()
  },

  methods: {

    // generate all resource the system have
    initResources () {
      console.log(menuList)
    }

  }
}
</script>

<template>
  <Layout class="layout" :style="{background: '#f0f2f5', width: '100%', minHeight: '100vh'}">
    <Header :style="{position: 'fixed', left: '0', top: '0', width: '100%', zIndex: 1001}">
      <XHeader />
    </Header>
    <Layout :style="{marginTop: '64px'}">
      <Sider :style="{
        width: collapsed ? '64px' : '200px',
        minWidth: collapsed ? '64px' : '200px',
        position: 'fixed',
        top: '64px',
        bottom: 0,
        background: '#fff',
        boxShadow: '0 2px 10px 0 rgba(7,17,27,.1)'
      }">
        <XMenu :menuList="menuList" @selectMenu="selectMenu"/>
      </Sider>
      <Layout :style="{marginLeft: collapsed ? '64px' : '200px', padding: '0 24px', transition: '.2s'}">
          <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{background: '#fff'}">
            <router-view />
          </Content>
          <Footer style="text-align: center; background: transparent;">2018-2018 &copy; 遇音科技</Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex'
import XHeader from '@/views/Layout/Home/Header'
import XMenu from '@/views/Layout/Home/Menu'
import menuList from '@/config/menu'

export default {
  name: 'Home',
  data () {
    return {
      menuList
    }
  },

  computed: {
    ...mapGetters([
      'collapsed'
    ])
  },

  methods: {
    selectMenu (name) {
      this.$router.push({ name })
    }
  },

  components: {
    XHeader,
    XMenu
  }
}
</script>

<style lang="less" scoped>
.layout {
  .ivu-layout-header {
    background: #23262E
  }

  /deep/ .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #eb7252;
  }
  /deep/ .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    left: 0;
    width: 4px;
    background: #eb7252;
  }

  /deep/ .ivu-menu-vertical .ivu-menu-item:hover,
  /deep/ .ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #eb7252
  }
}
</style>

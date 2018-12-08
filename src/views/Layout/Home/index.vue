<template>
  <Layout class="layout" :style="{background: '#f0f2f5', width: '100%', minHeight: '100vh'}">
    <Header :style="{position: 'fixed', left: '0', top: '0', width: '100%', zIndex: 1001}">
      <XHeader />
    </Header>
    <Layout :style="{marginTop: '64px'}">
      <Sider :style="{
        width: collapsed ? '64px' : '200px',
        minWidth: collapsed ? '64px' : '200px',
        overflowX: collapsed ? '' : 'hidden',
        position: 'fixed',
        top: '64px',
        bottom: 0,
        background: '#fff',
        boxShadow: '0 2px 10px 0 rgba(7,17,27,.1)',
        zIndex: 9
      }">
        <XMenu :menuList="menuList" @selectMenu="selectMenu"/>
      </Sider>
      <Layout :style="{marginLeft: collapsed ? '64px' : '200px', padding: '0 24px', transition: '.2s'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem v-for="(bread, index) in breadList" :key="index" :to="{name: bread}">{{ generateTitle(bread) }}</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{position: 'relative', background: '#fff'}">
            <router-view />
          </Content>
          <Footer style="text-align: center; background: transparent;">{{ footer }}</Footer>
      </Layout>
    </Layout>
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex'
import XHeader from '@/views/Layout/Home/Header'
import XMenu from '@/views/Layout/Home/Menu'
import menuList from '@/config/menu'
import page from '@/config/index'

export default {
  name: 'Home',
  data () {
    return {
      menuList,
      footer: page.footer
    }
  },

  computed: {
    ...mapGetters([
      'collapsed'
    ]),
    breadList () {
      let list = this.$route.matched.reduce((a, { name, meta }) => {
        let bread = meta && meta.bread

        // 如果是一个数组 用来补全前面的 路径
        if (Array.isArray(bread)) {
          a = a.concat(bread)
        }

        // 没有 meta 或 没有设置 bread 为 false 时显示面包屑
        if (!meta || bread !== false) {
          a.push(name)
        }
        return a
      }, [])

      return list[0] === 'Home' ? list : ['Home'].concat(list)
    }
  },

  methods: {

    // 选择菜单
    selectMenu (name) {
      this.$router.push({ name })
    },

    // 面包屑 的国际化处理
    generateTitle (title) {
      const hasKey = this.$te('bread.' + title)

      if (hasKey) {
        // $t :this method from vue-i18n, inject in @/lang/index.js
        const translatedTitle = this.$t('bread.' + title)

        return translatedTitle
      }
      return title
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
  .ivu-menu-vertical.ivu-menu-light:after {
    width: 0;
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

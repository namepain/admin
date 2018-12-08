<template>
  <Menu
    ref="menu"
    :active-name="activeMenuName"
    :open-names="openNames"
    theme="light"
    :width="collapsed ? '64px' : '200px'"
    :style="{height: '100%', transition: collapsed ? '' : '.2s'}"
    @on-select="selectMenu"
  >

    <div :style="{
      width: collapsed ? '64px' : '200px',
      minWidth: collapsed ? '64px' : '200px',
      overflowX: 'hidden',
      height: '100%'
    }"
    >
      <!-- 非折叠菜单，递归 menuItem -->
      <template v-if="!collapsed">
        <recursionMenuItem v-for="(menu, index) in menuList" :key="index" :menu="menu"></recursionMenuItem>
      </template>

      <!-- 折叠菜单，递归 dropdown -->
      <div class="collapsedMenu" v-else>
        <template v-for="(menu, index) in menuList">
          <Tooltip
          :key="index"
            v-if="!menu.children || !menu.children.length"
            :content="generateTitle(menu.name)"
            placement="right"
          >
            <Icon v-if="menu.icon" :type="menu.icon" size="30" @click="selectMenu(menu.to)" :style="{padding: '10px', cursor: 'pointer'}"/>
          </Tooltip>

          <collapsedMenuItem v-else :key="index" :menu="menu" @on-select="selectMenu" noName></collapsedMenuItem>
        </template>
      </div>
    </div>
  </Menu>
</template>

<script>
import { mapGetters } from 'vuex'
import recursionMenuItem from './recursionMenuItem'
import collapsedMenuItem from './collapsedMenuItem'
import { generateTitle } from './i18'

export default {
  name: 'XMenu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      activeMenuName: null,
      openNames: [],
      flatMenu: this.flattenMenu(this.menuList).map(v => v.to)
    }
  },

  computed: {
    ...mapGetters([
      'collapsed'
    ])
  },

  watch: {
    '$route': {
      immediate: true,
      handler (v) {
        if (!this.collapsed) {
          if (this.flatMenu.indexOf(v.name) > -1) {
            this.activeMenuName = v.name
          }
          this.openNames = v.matched.map(v => v.name)
          this.$nextTick(() => this.$refs['menu'].updateOpened())
        }
      }
    }
  },

  methods: {

    // 选择菜单
    selectMenu (name) {
      console.log(name)
      this.$emit('selectMenu', name)
    },

    // 扁平菜单数组
    flattenMenu (list) {
      if (!list || !Array.isArray(list)) {
        return []
      }
      return list.reduce((a, b) => {
        return a.concat(b.children && b.children.length ? [b].concat(this.flattenMenu(b.children)) : b)
      }, [])
    },

    // 国际化处理
    generateTitle
  },

  components: {
    recursionMenuItem,
    collapsedMenuItem
  }
}
</script>

<style lang="less" scoped>
.collapsedMenu {
  width: auto;

  > .ivu-tooltip, > .ivu-dropdown {
    width: 64px;
    text-align: center;
  }

  /deep/ .ivu-select-dropdown {
    width: auto;
  }

  /deep/ .ivu-select-dropdown {
    width: 160px;
  }

  /deep/ .ivu-dropdown-item {
    display: flex;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>

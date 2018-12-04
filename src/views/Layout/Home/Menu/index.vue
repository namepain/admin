<template>
  <Menu
    active-name="1-2"
    theme="light"
    width="auto"
    :open-names="['1']"
    :style="{height: '100%'}"
    @on-select="selectMenu"
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
          :content="menu.name"
          placement="right"
        >
          <Icon v-if="menu.icon" :type="menu.icon" size="30" @click="selectMenu(menu.to)" :style="{margin: '10px', cursor: 'pointer'}"/>
        </Tooltip>

        <collapsedMenuItem v-else :key="index" :menu="menu" @on-select="selectMenu" noName></collapsedMenuItem>
      </template>
    </div>
  </Menu>
</template>

<script>
import { mapGetters } from 'vuex'
import recursionMenuItem from './recursionMenuItem'
import collapsedMenuItem from './collapsedMenuItem'

export default {
  name: 'XMenu',
  props: {
    menuList: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapGetters([
      'collapsed'
    ])
  },

  methods: {
    selectMenu (name) {
      console.log(name)
      this.$emit('selectMenu', name)
    }
  },

  components: {
    recursionMenuItem,
    collapsedMenuItem
  }
}
</script>

<style lang="less" scoped>
.collapsedMenu {

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

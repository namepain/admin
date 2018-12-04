<template>
  <Dropdown placement="right" trigger="click">
    <div @click="handleClick(menu.to)" :style="{
        cursor: 'pointer',
        fontSize: '12px',
        textAlign: noName ? 'center' : 'left',
        padding: noName ? '' : '7px 20px'
      }"
    >

      <!-- 第一层不需要显示中文，fontSize 变大 -->
      <template v-if="noName">
        <Icon :type="menu.icon" size="30" :style="{padding: '10px', cursor: 'pointer'}"/>
      </template>

      <template v-else>
        <Icon :type="menu.icon" size="12"
          :style="{marginRight: '8px', marginLeft: '-10px'}"
        />{{ menu.name }}
      </template>

      <Icon v-if="!noName" type="ios-arrow-forward" :style="{position: 'absolute', top: '10px', right: '4px'}"/>

    </div>
    <DropdownMenu slot="list">
      <template v-for="(subMenu, index) in menu.children">

        <!-- 没有children, 则是普通的 dropdownItem -->
        <DropdownItem
          v-if="!subMenu.children || !subMenu.children.length"
          :key="index"
          :name="subMenu.to"
        >
          <div @click="handleClick(subMenu.to)" :style="{
            flex: 1,
            textAlign: 'left',
            margin: '-12px -16px',
            padding: '10px'
          }">
            <Icon v-if="subMenu.icon" :type="subMenu.icon" :style="{marginRight: '8px'}"
            />{{ subMenu.name }}
          </div>
        </DropdownItem>

        <!-- 有children, 递归 dropdownItem -->
        <collapsedMenuItem v-else :key="index" :menu="subMenu" @on-select="handleClick"></collapsedMenuItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: 'collapsedMenuItem',
  props: {
    menu: {
      type: Object,
      required: true
    },
    noName: { // 第一层不需要显示中文，fontSize 变大
      type: Boolean,
      default: false
    }
  },

  methods: {
    handleClick (to) {
      this.$emit('on-select', to)
    }
  }
}
</script>

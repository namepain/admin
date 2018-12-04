<template>
  <MenuItem
    v-if="!menu.children || !menu.children.length"
    :name="menu.to"
  >
    <Icon v-if="menu.icon" :type="menu.icon" :style="{marginRight: '8px'}"/>
    {{ menu.name }}
  </MenuItem>

  <Submenu
    v-else
    :name="menu.to"
  >
    <template slot="title">
      <Icon v-if="menu.icon" :type="menu.icon" :style="{marginRight: '8px'}"/>
      {{ menu.name }}
    </template>
    <recursion-menu-item
      v-for="(subMenu, subIndex) in menu.children"
      :key="subIndex"
      :menu="subMenu"
    ></recursion-menu-item>
  </Submenu>
</template>

<script>
export default {
  name: 'recursionMenuItem',
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>

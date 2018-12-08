<template>
  <MenuItem
    v-if="!menu.children || !menu.children.length"
    :name="menu.to"
  >
    <Icon v-if="menu.icon" :type="menu.icon" :style="{marginRight: '8px'}"/>
    {{ generateTitle(menu.name) }}
  </MenuItem>

  <Submenu
    v-else
    :name="menu.to"
  >
    <template slot="title">
      <Icon v-if="menu.icon" :type="menu.icon" :style="{marginRight: '8px'}"/>
      {{ generateTitle(menu.name) }}
    </template>
    <recursion-menu-item
      v-for="(subMenu, subIndex) in menu.children"
      :key="subIndex"
      :menu="subMenu"
    ></recursion-menu-item>
  </Submenu>
</template>

<script>
import { generateTitle } from './i18'

export default {
  name: 'recursionMenuItem',
  props: {
    menu: {
      type: Object,
      required: true
    }
  },

  methods: {
    generateTitle
  }
}
</script>

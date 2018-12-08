<template>
  <Dropdown @on-click="selectLang">
    <a href="javascript:void(0)">
      <!-- 语言 -->
      <Icon type="md-globe" :size="size" :color="color"/>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem name="en-US">english</DropdownItem>
      <DropdownItem name="zh-CN">中文</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  name: 'Lang',
  props: {
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
      this.$Message.success('Switch Language Success!')
    }
  }
}
</script>

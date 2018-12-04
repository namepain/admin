<template>
  <div class="header">
    <h1 class="title">遇音管理系统</h1>

    <div :style="{display: 'flex', flex: '1', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '20px'}">
      <Icon type="md-menu" color="#fff" size="30" @click="collapseMenu" :style="{transition: '.2s', cursor: 'pointer', transform: collapsed ? 'rotate(90deg)' : ''}"/>
      <Dropdown @on-click="handleClick">
          <a href="javascript:void(0)">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <Icon type="md-arrow-dropdown" color="#fff"/>
          </a>
          <DropdownMenu slot="list">
              <DropdownItem name="驴打滚">驴打滚</DropdownItem>
              <DropdownItem name="炸酱面">炸酱面</DropdownItem>
              <DropdownItem name="豆汁儿" disabled>豆汁儿</DropdownItem>
              <DropdownItem name="冰糖葫芦">冰糖葫芦</DropdownItem>
              <DropdownItem name="logout" divided>退出登录</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'XHeader',
  computed: {
    ...mapGetters([
      'collapsed'
    ])
  },

  methods: {
    collapseMenu () {
      this.$store.dispatch('collapseMenu')
    },

    handleClick (name) {
      if (name === 'logout') {
        this.$store.dispatch('Logout').then(res => {
          this.$router.push({ name: 'Login' })
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 22px;
    color: #fff;
  }
}
</style>

<template>
  <div class="header">
    <h1 class="title">{{ header }}</h1>

    <div :style="{flex: '1', paddingLeft: '20px'}">
      <Icon type="md-menu" color="#fff" size="30" @click="collapseMenu" :style="{transition: '.2s', cursor: 'pointer', transform: collapsed ? 'rotate(90deg)' : ''}"/>
      <Dropdown @on-click="handleClick" :style="{float: 'right'}">
          <a href="javascript:void(0)">
            <Avatar :src="avatar + '?imageView2/1/w/64/h/64'" />
            <Icon type="md-arrow-dropdown" color="#fff"/>
          </a>
          <DropdownMenu slot="list">
              <DropdownItem name="logout" >退出登录</DropdownItem>
          </DropdownMenu>
      </Dropdown>
      <Lang  :style="{float: 'right', marginRight: '10px'}" />
    </div>

  </div>
</template>

<script>
import Lang from '@/components/Lang'
import { mapGetters } from 'vuex'
import page from '@/config/index'

export default {
  name: 'XHeader',
  data () {
    return {
      header: page.header
    }
  },
  computed: {
    ...mapGetters([
      'collapsed',
      'avatar'
    ])
  },

  methods: {
    collapseMenu () {
      this.$store.dispatch('collapseMenu')
    },

    handleClick (name) {
      if (name === 'logout') {
        this.$store.dispatch('frontLogout').then(res => {
          this.$router.push({ name: 'Login' })
        })
      }
    }
  },

  components: {
    Lang
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

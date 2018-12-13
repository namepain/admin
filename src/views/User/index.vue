<template>
  <Card class="userList " :bordered="false" dis-hover>
    <p slot="title">系统用户</p>

    <Row type="flex" justify="end" align="middle" class="mb10">
      <Input v-model.trim="searchParam.name" placeholder="name" clearable class="w220 mr10"></Input>
      <Input v-model.trim="searchParam.mobile" placeholder="mobile" clearable class="w220 mr10"></Input>

      <Button type="primary" icon="ios-search" :loading="loading" @click="getList(1)">查询</Button>
    </Row>
    <Table :columns="columns" :data="data" :loading="loading" size="small" class="mt20"></Table>
    <Row type="flex" justify="end" align="middle" class="mt10">
      <Page :total="searchParam.total"
            :page-size="searchParam.pageSize" :current.sync="searchParam.pageNum"
            @on-change="getList"
      > </Page>
    </Row>

    <Modal v-model="modal" title="新增用户">
      <!-- <Input v-model.trim="coin" placeholder=""></Input> -->
      <div slot="footer">
        <Button @click="modal = false">取消</Button>
        <Button type="primary" @click="saveUser">确定</Button>
      </div>
    </Modal>

    <Modal v-model="role_modal" title="授予角色">
      <Transfer
        :data="roleList"
        :target-keys="targetRoles"
        :render-format="renderTransfer"
        @on-change="transferChange"></Transfer>
      <div slot="footer">
        <Button @click="role_modal = false">取消</Button>
        <Button type="primary" @click="saveUserRole">确定</Button>
      </div>
    </Modal>
  </Card>
</template>

<script>
import { getUserList } from '@/api/user'
import { formatDate } from '@/common/util'

export default {
  name: 'UserList',
  data () {
    return {
      modal: false,
      role_modal: false,
      loading: false,
      searchParam: {
        name: '',
        mobile: '',
        pageNum: 1,
        pageSize: 10,
        total: 0
      },

      columns: [
        { title: 'ID', minWidth: 50, key: 'id' },
        { title: '名称', minWidth: 120, key: 'name' },
        { title: '角色', minWidth: 120, key: 'role', render: (h, params) => h('span', params.row.roles.map(v => v.name).join(',')) },
        // { title: '密码', minWidth: 100, key: 'password' },
        { title: '创建时间', minWidth: 100, key: 'created_at', render: (h, params) => h('span', formatDate(params.row.created_at)) },
        // { title: '状态', minWidth: 100, key: 'status' },
        {
          title: '操作',
          key: 'action',
          width: 180,
          fixed: 'right',
          render: (h, { row }) => {
            return h('div', [
              h('Button', { props: { type: 'info', size: 'small' }, style: { marginRight: '5px' }, on: { click: () => this.edit(row) } }, '编辑'),
              h('Button', { props: { type: 'success', size: 'small' }, style: { marginRight: '5px' }, on: { click: () => this.auth(row) } }, '授权'),
              h('Button', { props: { type: 'error', size: 'small' }, style: { marginRight: '5px' }, on: { click: () => this.dele(row) } }, '删除')
            ])
          }
        }
      ],
      data: [],

      roleList: [
        { 'key': '1', 'label': 'Content 1', 'disabled': false },
        { 'key': '2', 'label': 'Content 2', 'disabled': true },
        { 'key': '3', 'label': 'Content 3', 'disabled': false }
      ],
      targetRoles: ['1', '2']
    }
  },

  created () {
    this.getList()
  },

  methods: {

    // 获取列表
    getList (page) {
      this.searchParam.pageNum = page || this.searchParam.pageNum

      this.loading = true
      getUserList(this.searchParam).then(data => {
        this.data = data.list
        this.searchParam.total = data.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },

    // 新增系统用户
    saveUser () {
      // ...
    },

    // 编辑系统用户
    edit () {
      // ...
    },

    // 删除系统用户
    dele () {
      // ...
    },

    // 授权给用户
    auth (row) {
      // ...
      this.role_modal = true
    },

    // 保存用户角色
    saveUserRole () {
      // ...
    },

    // 穿梭框渲染函数
    renderTransfer (item) {
      return item.key + ':' + item.label
    },

    // 穿梭框改变
    transferChange (newTargetKeys) {
      this.targetRoles = newTargetKeys
    }
  }
}
</script>

<template>
  <Card class="userList " :bordered="false" dis-hover>
    <p slot="title">系统角色列表</p>

    <Row type="flex" justify="end" align="middle" class="mb10">

      <Button type="primary" icon="ios-search" :loading="loading" @click="getList(1)">查询</Button>
    </Row>
    <Table :columns="columns" :data="data" :loading="loading" size="small" class="mt20"></Table>
    <Row type="flex" justify="end" align="middle" class="mt10">
      <Page :total="searchParam.total"
            :page-size="searchParam.pageSize" :current.sync="searchParam.pageNum"
            @on-change="getList"
      > </Page>
    </Row>

    <Modal v-model="modal" title="新增角色">
      <!-- <Input v-model.trim="coin" placeholder=""></Input> -->
      <div slot="footer">
        <Button @click="modal = false">取消</Button>
        <Button type="primary" @click="saveRole">确定</Button>
      </div>
    </Modal>
  </Card>
</template>

<script>
import { getRoleList } from '@/api/user'

export default {
  name: 'UserList',
  data () {
    return {
      modal: false,
      loading: false,
      searchParam: {
        pageNum: 1,
        pageSize: 10,
        total: 0
      },

      columns: [
        { title: 'ID', minWidth: 50, key: 'id' },
        { title: '角色', minWidth: 120, key: 'role' },
        { title: '名称', minWidth: 120, key: 'name' },
        { title: '描述', minWidth: 100, key: 'desc' },
        { title: '备注', minWidth: 100, key: 'remark' },
        {
          title: '操作',
          key: 'action',
          width: 180,
          fixed: 'right',
          render: (h, { row }) => {
            return h('div', [
              h('Button', { props: { type: 'info', size: 'small' }, style: { marginRight: '5px' }, on: { click: () => this.editRole(row) } }, '编辑'),
              h('Button', { props: { type: 'error', size: 'small' }, style: { marginRight: '5px' }, on: { click: () => this.deleRole(row) } }, '删除')
            ])
          }
        }
      ],
      data: []
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
      getRoleList(this.searchParam).then(data => {
        this.data = data.list
        this.searchParam.total = data.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },

    // 新增系统用户
    saveRole () {
      // ...
    },

    // 编辑系统用户
    editRole () {
      // ...
    },

    // 删除系统用户
    deleRole () {
      // ...
    }
  }
}
</script>

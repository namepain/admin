<template>
  <Card class="userList " :bordered="false" dis-hover>
    <p slot="title">系统角色列表</p>

    <Row type="flex" justify="end" align="middle" class="mb10">
      <Col style="flex:1;">
        <Button type="success" icon="md-add" @click="modal = true">新增角色</Button>
      </Col>
      <Col>
        <Button type="primary" icon="ios-search" :loading="loading" @click="getList(1)">查询</Button>
      </Col>
    </Row>
    <Table :columns="columns" :data="data" :loading="loading" size="small" class="mt20"></Table>
    <Row type="flex" justify="end" align="middle" class="mt10">
      <Page :total="searchParam.total"
            :page-size="searchParam.pageSize" :current.sync="searchParam.pageNum"
            @on-change="getList"
      > </Page>
    </Row>

    <Modal v-model="modal" title="新增角色">
      <Form :model="formItem" :rules="formRules" ref="form" :label-width="80">
        <FormItem label="角色名" prop="name">
          <Input v-model.trim="formItem.name" placeholder="请输入角色名" />
        </FormItem>
        <FormItem label="描述" prop="desc">
          <Input v-model.trim="formItem.desc" placeholder="请输入描述" />
        </FormItem>
        <FormItem label="备注" prop="remark">
          <Input v-model.trim="formItem.remark" placeholder="请输入备注" />
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="modal = false">取消</Button>
        <Button type="primary" @click="saveOrUpdate">确定</Button>
      </div>
    </Modal>
  </Card>
</template>

<script>
import { getRoleList as getList, saveRole as save, updateRole as update, deleteRole as dele } from '@/api/user'

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
        { title: '角色', minWidth: 120, key: 'name' },
        { title: '描述', minWidth: 100, key: 'desc' },
        { title: '备注', minWidth: 100, key: 'remark' },
        {
          title: '操作',
          key: 'action',
          width: 180,
          fixed: 'right',
          render: (h, { row }) => {
            return h('div', row.name === 'admin' ? '' : [
              h('Button', { props: { type: 'info', size: 'small' }, style: { marginRight: '5px' }, on: { click: () => this.edit(row) } }, '编辑'),
              h('Button', { props: { type: 'success', size: 'small' }, style: { marginRight: '5px' }, on: { click: () => this.auth(row) } }, '授权'),
              h(
                'Poptip',
                {
                  props: { transfer: true, confirm: true, title: '你确定删除此角色？' },
                  on: { 'on-ok': () => this.dele(row) }
                },
                [ h('Button', { props: { type: 'error', size: 'small' } }, '删除') ]
              )
            ])
          }
        }
      ],
      data: [],

      formItem: {
        name: '',
        desc: '',
        remark: ''
      },
      formRules: {
        name: [{ required: true, trigger: 'blur', message: '角色名不能为空' }]
      }
    }
  },

  created () {
    // this.getList()
  },

  methods: {

    // 获取列表
    getList (page) {
      this.searchParam.pageNum = page || this.searchParam.pageNum

      this.loading = true
      getList(this.searchParam).then(data => {
        this.data = data.list
        this.searchParam.total = data.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },

    // 新增 或 编辑 系统角色
    saveOrUpdate () {
      this.$refs['form'].validate(valid => {
        if (!valid) {
          this.$Message.error('请检查表单填写')
          return
        }
        if (!this.formItem.id) {
          save(this.formItem).then(data => {
            this.getList()
            this.modal = false
            this.resetFormItem()
          })
        } else {
          update(this.formItem.id, this.formItem).then(data => {
            this.getList()
            this.modal = false
            this.resetFormItem()
          })
        }
      })
    },

    // 编辑系统用户
    edit (row) {
      this.formItem.id = row.id
      Object.keys(this.formItem).forEach(key => {
        this.formItem[key] = row[key]
      })

      this.modal = true
    },

    // 删除系统用户
    dele ({ id }) {
      dele(id).then(data => this.getList())
    },

    // 重置 表单
    resetFormItem () {
      delete this.formItem.id
      Object.keys(this.formItem).forEach(key => {
        this.formItem[key] = ''
      })
    },

    // 给角色授权资源
    auth (row) {
      this.$router.push({ name: 'RoleResource', params: row })
    }
  }
}
</script>

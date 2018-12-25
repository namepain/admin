<template>
  <Card class="userList " :bordered="false" dis-hover>
    <p slot="title">系统用户</p>

    <Row type="flex" justify="end" align="middle" class="mb10">
      <Col style="flex:1">
        <Button type="success" icon="md-add" @click="modal = true" class="fl">新增用户</Button>
      </Col>
      <Col>
        <Input v-model.trim="searchParam.name" placeholder="name" clearable class="w220 mr10"></Input>
        <Input v-model.trim="searchParam.mobile" placeholder="mobile" clearable class="w220 mr10"></Input>
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

    <Modal v-model="modal" title="新增用户">
      <Form :model="formItem" :rules="userRules" ref="form" :label-width="80">
        <FormItem label="用户名" prop="name">
          <Input v-model.trim="formItem.name" placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="描述" prop="desc">
          <Input v-model.trim="formItem.desc" placeholder="请输入描述" />
        </FormItem>
        <FormItem label="备注" prop="remark">
          <Input v-model.trim="formItem.remark" placeholder="请输入备注" />
        </FormItem>
        <FormItem label="状态" prop="status">
          <Select v-model="formItem.status" placeholder="请选择用户状态">
            <Option :value="0">启用</Option>
            <Option :value="1">不启用</Option>
          </Select>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button @click="modal = false">取消</Button>
        <Button type="primary" @click="saveOrUpdateUser">确定</Button>
      </div>
    </Modal>

    <Modal v-model="role_modal" title="授予角色">
      <Transfer
        filterable
        :titles="['所有角色', '已授权角色']"
        :data="roleList"
        :target-keys="targetRoles"
        :render-format="renderTransfer"
        :list-style="{minWidth: '212px', minHeight: '340px'}"
        @on-change="transferChange"></Transfer>
      <div slot="footer">
        <Button @click="role_modal = false">取消</Button>
        <Button type="primary" @click="saveUserRole">确定</Button>
      </div>
    </Modal>
  </Card>
</template>

<script>
import { getUserList, getAllRoleList, saveUser, updateUser, deleteUser, setUserRoles } from '@/api/user'
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
        { title: '所属角色', minWidth: 120, key: 'role', render: (h, params) => h('span', params.row.roles.map(v => v.name).join(',')) },
        // { title: '密码', minWidth: 100, key: 'password' },
        { title: '创建时间', minWidth: 100, key: 'created_at', render: (h, params) => h('span', formatDate(params.row.created_at)) },
        // { title: '状态', minWidth: 100, key: 'status' },
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
                  props: { transfer: true, confirm: true, title: '你确定删除此用户？' },
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
        name: '', // 用户名
        desc: '', // 描述
        remark: '', // 备注
        status: 0 // 启用状态 0 正常启用，1 冻结
      },
      userRules: {
        name: [{ required: true, trigger: 'blur', message: '用户名必填' }],
        status: [{ required: true, type: 'number', trigger: 'change', message: '启用状态必选' }]
      },

      authUserId: '', // 当前授权的用户
      roleList: [],
      targetRoles: []
    }
  },

  created () {
    this.getList()
    this.getRoleList()
  },

  methods: {

    // 获取角色列表
    getRoleList () {
      getAllRoleList().then(data => {
        this.roleList = data.map(v => {
          // iview 穿梭框要求必须有 key
          v.key = String(v.id)
          return v
        })
      })
    },

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
    saveOrUpdateUser () {
      this.$refs['form'].validate(valid => {
        if (!valid) {
          this.$Message.error('请检查表单填写')
          return
        }
        if (!this.formItem.id) {
          saveUser(this.formItem).then(data => {
            this.getList()
            this.modal = false
            this.resetFormItem()
          })
        } else {
          updateUser(this.formItem.id, this.formItem).then(data => {
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
      deleteUser(id).then(data => this.getList())
    },

    // 授权给用户
    auth (row) {
      this.authUserId = row.id
      this.targetRoles = row.roles.map(v => String(v.id))
      this.role_modal = true
    },

    // 保存用户角色
    saveUserRole () {
      setUserRoles(this.authUserId, this.targetRoles.map(v => Number(v))).then(data => {
        this.role_modal = false
        this.getList()
      })
    },

    // 穿梭框渲染函数
    renderTransfer (item) {
      return item.name + ' - ' + item.desc
    },

    // 穿梭框改变
    transferChange (newTargetKeys) {
      this.targetRoles = newTargetKeys
    },

    // 重置 表单
    resetFormItem () {
      delete this.formItem.id
      Object.keys(this.formItem).forEach(key => {
        this.formItem[key] = ''
      })
      this.formItem.status = 0
    }
  }
}
</script>

<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">用户标签</p>

    <Row type="flex" justify="space-between" align="middle" class="mb10">
      <Col>
        <Button type="success" icon="md-add" @click="modal = true">添加标签</Button>
      </Col>
      <Col>
        <Input v-model.trim="searchParam.nickname" placeholder="nickname" clearable class="w220 mr10"></Input>
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

    <Modal v-model="modal">
      <Form :label-width="100">
        <FormItem label="用户id">
          <Input v-model.trim="formItem.user_id" placeholder="用户id" ></Input>
        </FormItem>
        <FormItem label="标签">
          <Input v-model.trim="formItem.label" placeholder="标签" ></Input>
        </FormItem>
        <FormItem label="性别">
          <Select v-model="formItem.sex" placeholder="性别">
            <Option value="男">男</Option>
            <Option value="女">女</Option>
          </Select>
        </FormItem>
      </Form>
      <Row type="flex" justify="end" slot="footer">
        <Button @click="modal = false">取消</Button>
        <Button type="primary" @click="add">确定</Button>
      </Row>
    </Modal>
  </Card>
</template>

<script>
import { selectUserLabelAll, addUserLabel, deleteUserLabelByid } from '@/api/user'

/**
 "id": 188,
"userid": 95886192,
"label": 0,
"nickname": "哈哈哈",
"sex": "男",
"heroism_value": 20,
"charm_value": 0
 */
export default {
  name: 'MemberLabel',
  data () {
    return {
      modal: false,
      loading: false,
      formItem: {
        user_id: '',
        label: '',
        sex: '女'
      },
      searchParam: {
        nickname: '',
        pageNum: 1,
        pageSize: 20,
        total: 0
      },

      columns: [
        { title: 'ID', key: 'zizengid' },
        { title: '用户id', key: 'userid' },
        { title: '标签', key: 'label' },
        { title: '用户昵称', key: 'nickname' },
        { title: '性别', key: 'sex' },
        { title: '豪气值', key: 'heroism_value' },
        { title: '魅力值', key: 'charm_value' },
        {
          title: '操作',
          key: 'action',
          render: (h, { row: { sex, zizengid } }) => {
            return h('div', [
              h(
                'Poptip',
                {
                  props: { confirm: true, title: '你确定删除此标签？' },
                  on: { 'on-ok': () => this.deleteUserLabelByid(zizengid) }
                },
                [
                  h('Button', {
                    props: { type: 'error', size: 'small' }
                  }, '删除')
                ]
              )
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
      let { nickname, pageNum, pageSize } = this.searchParam
      this.loading = true
      selectUserLabelAll(nickname, pageNum, pageSize).then(data => {
        this.data = data.list
        this.searchParam.total = data.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },

    deleteUserLabelByid (id) {
      deleteUserLabelByid(id).then(data => {
        this.getList()
      })
    },

    // 新增标签
    add () {
      addUserLabel(this.formItem).then(data => {
        this.modal = false
        this.getList()
      })
    }
  }
}
</script>

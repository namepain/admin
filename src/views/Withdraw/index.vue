<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">提现</p>

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
  </Card>
</template>

<script>
import { getTiXianList, withdrawalcheck } from '@/api/user'
import { formatDate } from '@/common/util'

/**
"id": 21,
"status": 1,
"createtime": 1543198807,
"mobile": "15881996374",
"ali_mobile": "2755279665@qq.com",
"name": "王芳芳",
"profit": 140,
"nickname": "潮音",
"sex": "女"
 */
export default {
  name: 'WithdrawList',
  data () {
    return {
      loading: false,
      searchParam: {
        pageNum: 1,
        pageSize: 20,
        total: 0
      },

      columns: [
        { title: 'ID', key: 'id' },
        { title: '状态', key: 'status', render: (h, params) => h('span', params.row.status === 0 ? '待审核' : '已打款') },
        { title: '提现时间', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        { title: '提现人电话', key: 'mobile' },
        { title: '提现人账号', key: 'ali_mobile' },
        { title: '提现人名称', key: 'name' },
        { title: '提现额', key: 'profit' },
        { title: '提现人昵称', key: 'nickname' },
        { title: '提现人性别', key: 'sex' },
        {
          title: '操作',
          key: 'action',
          render: (h, { row: { id, mobile, status } }) => {
            return status === 0 && h(
              'Poptip',
              {
                props: { confirm: true, title: '你确定审核通过此提现？' },
                on: { 'on-ok': () => this.checkWithdraw(id, mobile) }
              },
              [
                h('Button', {
                  props: { type: 'warning', size: 'small' }
                }, '通过')
              ]
            )
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
      let { pageNum, pageSize } = this.searchParam
      this.loading = true
      getTiXianList(pageNum, pageSize).then(data => {
        this.data = data.list
        this.searchParam.total = data.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },

    // 审核提现
    checkWithdraw (id, mobile) {
      withdrawalcheck(id, mobile).then(data => {
        this.getList()
        this.$Notice.success({
          title: '提现成功',
          desc: '提现操作成功！！'
        })
      })
    }
  }
}
</script>

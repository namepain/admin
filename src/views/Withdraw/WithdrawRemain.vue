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
import { getAllUserTiXian } from '@/api/user'
import { formatDate } from '@/common/util'

/**
"id": 31,
"coins_call": 49.2,
"coins_gift": 165,
"profit": 21.42,
"createtime": 1542334414,
"updatetime": 1543592412,
"mobile": "18137854722",
"nickname": "👯👯讲故事的小娘子",
"sex": "女",
"reward_coin": 0
 */
export default {
  name: 'WithdrawRemain',
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
        { title: '通话收益总金币数量', key: 'coins_call' },
        { title: '礼物收益总金币数量', key: 'coins_gift' },
        { title: '推广奖励金币数量', key: 'reward_coin' },
        { title: '可提现总金额', key: 'profit' },
        { title: '创建时间', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        { title: '更新时间', key: 'updatetime', render: (h, { row: { updatetime } }) => h('span', formatDate(updatetime * 1000)) },
        { title: '提现人电话', key: 'mobile' },
        { title: '提现人昵称', key: 'nickname' },
        { title: '提现人性别', key: 'sex' }
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
      getAllUserTiXian(pageNum, pageSize).then(data => {
        this.data = data.list
        this.searchParam.total = data.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    }
  }
}
</script>

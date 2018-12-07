<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">支付宝订单统计</p>

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
import { selectAlipaystatisticalOrders } from '@/api/user'
// import { formatDate } from '@/common/util'

/**
 "id": 5,
"coin": 500,
"mobile": "18137854725",
"totalmoney": 63170,
"bishu": 69,
"createtime": 1532496498,
"updatetime": 0,
"outTradeNo": "153249649818137854725",
"totalamount": "50.00",
"trade_status": null,
"trade_no": null,
"buyer_logon_id": null,
"type": 0,
"platform": 0,
"nickname": "我叫X﹏X",
"sex": "男"

bishu: 1
nickname: "八块腹肌的小姐姐"
phone: "18137854721"
sex: "女"
sumcoin: 5000
totalmoney: 500
 */
export default {
  name: 'AlipaystatisticalOrders',
  data () {
    return {
      loading: false,
      searchParam: {
        pageNum: 1,
        pageSize: 20,
        total: 0
      },

      columns: [
        { title: '序号', type: 'index' },
        { title: '笔数', key: 'bishu' },
        { title: '昵称', key: 'nickname' },
        { title: '手机号', key: 'phone' },
        { title: '性别', key: 'sex' },
        { title: '总金币', key: 'sumcoin' },
        { title: '总金额', key: 'totalmoney' }

        // { title: '订单充值金币值', key: 'coin' },
        // { title: '手机号', key: 'mobile' },
        // { title: '订单号', key: 'outTradeNo' },
        // { title: '订单状态', key: 'trade_status' },
        // { title: '支付宝交易号', key: 'trade_no' },
        // { title: '买家支付宝账号', key: 'buyer_logon_id' },
        // { title: 'type', key: 'type' },
        // { title: '下单时间', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        // { title: '支付时间', key: 'updatetime', render: (h, { row: { updatetime } }) => h('span', formatDate(updatetime * 1000)) },
        // { title: '充值类型', key: 'type', render: (h, { row: { type } }) => h('span', type === 0 ? '金币充值' : 'vip充值') },
        // { title: '平台', key: 'platform', render: (h, { row: { platform } }) => h('span', platform === 0 ? 'ios' : 'Android') },
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
      selectAlipaystatisticalOrders(pageNum, pageSize).then(data => {
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

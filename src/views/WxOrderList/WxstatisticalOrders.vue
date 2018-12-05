<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">微信订单统计</p>

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
import { selectWxstatisticalOrders } from '@/api/user'
import { formatDate } from '@/common/util'

/**
 "id": 165,
  "coin": 12,
  "body": "遇音-12金币",
  "trade_type": "APP",
  "nonce_str": "d045a80503714ab287028a6deb2500e6",
  "out_trade_no": "154149199217761196067",
  "total_fee": "100",
  "discounts_fee": "0",
  "real_fee": "100",
  "mobile": "17761196067",
  "createTime": "1541491992",
  "time_end": null,
  "transaction_id": null,
  "platform": 0,
  "type": 0,
  "nickname": "小妹子",
  "sex": "男",
  "totalmoney": 123310,
  "bishu": 38
 */
export default {
  name: 'MemberList',
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
        { title: '笔数', key: 'bishu' },
        { title: '总金额', key: 'totalmoney' },
        { title: '充值金币数量', key: 'coin' },
        { title: '商品描述', key: 'body' },
        { title: '交易类型', key: 'trade_type' },
        { title: '随机字符串', key: 'nonce_str' },
        { title: '系统订单号', key: 'out_trade_no' },
        { title: '应付金额(即金币价值)单位为分', key: 'total_fee' },
        { title: '优惠金额', key: 'discounts_fee' },
        { title: '实付金额', key: 'real_fee' },
        { title: '下单人手机号', key: 'mobile' },
        { title: '微信支付订单号', key: 'transaction_id' },
        { title: '下单时间', key: 'createTime', render: (h, { row: { createTime } }) => h('span', formatDate(createTime * 1000)) },
        /* eslint-disable-next-line */
        { title: '支付完成时间', key: 'time_end', render: (h, { row: { time_end } }) => h('span', formatDate(time_end * 1000)) },
        { title: '平台', key: 'platform', render: (h, { row: { platform } }) => h('span', platform === 0 ? 'ios' : 'Android') },
        { title: '充值类型', key: 'type', render: (h, { row: { type } }) => h('span', type === 0 ? '金币充值' : 'vip充值') },
        { title: '昵称', key: 'nickname' },
        { title: '性别', key: 'sex' }
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
      selectWxstatisticalOrders(pageNum, pageSize).then(data => {
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

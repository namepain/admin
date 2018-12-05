<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">支付宝订单</p>

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
import { selectAlipayOrders } from '@/api/user'
import { formatDate } from '@/common/util'

/**
 * `id` int(20) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `mobile` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '下单人手机号',
  `coin` int(10) DEFAULT NULL COMMENT '订单充值金币值',
  `totalamount` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '订单对应金额(人民币/元)',
  `outTradeNo` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '订单号',
  `trade_status` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '订单状态',
  `buyer_logon_id` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '买家支付宝账号',
  `trade_no` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '支付宝交易号',
  `createtime` int(20) DEFAULT NULL COMMENT '当前时间戳',
  `updatetime` int(20) DEFAULT NULL COMMENT '支付时间戳',
  `type` int(10) DEFAULT NULL COMMENT '0表示金币充值1表示vip充值',

  "platform": 0,
  "nickname": "小妹子",
  "sex": "男"
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
        { title: '下单人手机号', key: 'mobile' },
        { title: '订单充值金币值', key: 'coin' },
        { title: '订单对应金额', key: 'totalamount' },
        { title: '订单号', key: 'outTradeNo' },
        { title: '订单状态', key: 'trade_status' },
        { title: '买家支付宝账号', key: 'buyer_logon_id' },
        { title: '支付宝交易号', key: 'trade_no' },
        { title: '当前时间戳', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        { title: '支付时间戳', key: 'updatetime', render: (h, { row: { updatetime } }) => h('span', formatDate(updatetime * 1000)) },
        { title: '充值类型', key: 'type', render: (h, { row: { type } }) => h('span', type === 0 ? '金币充值' : 'vip充值') },
        { title: '平台', key: 'platform', render: (h, { row: { platform } }) => h('span', platform === 0 ? 'ios' : 'Android') },
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
      selectAlipayOrders(pageNum, pageSize).then(data => {
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

<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">分享注册统计</p>

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
import { getShareRegisterStatistical } from '@/api/user'
// import { formatDate } from '@/common/util'

/**
  "id": 0,
  "userid": 0,
  "shareuserid": 30321007,
  "createtime": 1542461035,
  "sumid": 7,
  "sharename": "花骨朵儿",
  "registername": "佛系大叔s",
  "sharesex": "女",
  "registersex": "男"
 */
export default {
  name: 'ShareRegisterStatis',
  data () {
    return {
      loading: false,
      searchParam: {
        pageNum: 1,
        pageSize: 20,
        total: 0
      },

      columns: [
        // { title: 'ID', key: 'id' },
        // { title: '是否注册', key: 'boosex', render: (h, { row: { boosex } }) => h('span', boosex === 0 ? '未注册' : '已注册') },
        { title: '注册总数', key: 'sumid' },
        // { title: '注册用户的UserId', key: 'userid' },
        { title: '推广分享用户的UserId', key: 'shareuserid' },
        // { title: '当前时间戳', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        { title: '推广人性别', key: 'sharesex' },
        // { title: '注册人性别', key: 'registersex' },
        { title: '推广人', key: 'sharename' }
        // { title: '注册人', key: 'registername' }
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
      getShareRegisterStatistical(pageNum, pageSize).then(data => {
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

<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">通话记录统计</p>

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
import { getAllCallstatisticalList } from '@/api/user'
import { formatDate, parseSeconds } from '@/common/util'

/**
  "id": 1119,
  "mobile": "15854110915",
  "to_mobile": "15881996374",
  "time": 0,
  "sumtime": 5340,
  "createtime": 1542034768,
  "content": "00:00:00",
  "six": 0,
  "to_nickname": "腐烂",
  "from_nickname": "潮音",
  "to_sex": "男",
  "from_sex": "女"
 */
export default {
  name: 'CallRecordStatis',
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
        { title: '用户手机号', key: 'mobile' },
        { title: '用户聊天人手机号', key: 'to_mobile' },
        { title: '通话总时长', key: 'sumtime', render: (h, params) => h('span', parseSeconds(params.row.sumtime)) },
        // { title: '单次通话时长(秒)', key: 'time', render: (h, params) => h('span', parseSeconds(params.row.time)) },
        { title: '最后一次通话时间', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        // { title: '通话时长精确到秒', key: 'content' },
        { title: '用户性别', key: 'from_sex' },
        { title: '聊天人性别', key: 'to_sex' },
        { title: '昵称', key: 'from_nickname' },
        { title: '聊天人昵称', key: 'to_nickname' }
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
      getAllCallstatisticalList(pageNum, pageSize).then(data => {
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

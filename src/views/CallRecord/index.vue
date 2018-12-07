<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">通话记录</p>

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
import { getAllCallList } from '@/api/user'
import { formatDate, parseSeconds } from '@/common/util'

/**
  "id": 2735,
  "mobile": "13609518500",
  "to_mobile": "15003224216",
  "time": 0,
  "createtime": 1543935139,
  "content": "00:00:00",
  "six": 1,
  "to_nickname": "悠悠",
  "from_nickname": "暖予.",
  "to_sex": "女",
  "from_sex": "女"
 */
export default {
  name: 'CallRecordList',
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
        { title: '用户手机号', key: 'mobile' },
        { title: '用户聊天人手机号', key: 'to_mobile' },
        { title: '单次通话时长(秒)', key: 'time', render: (h, params) => h('span', parseSeconds(params.row.time)) },
        { title: '最后一次通话时间', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        { title: '通话时长', key: 'content' },
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
      getAllCallList(pageNum, pageSize).then(data => {
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

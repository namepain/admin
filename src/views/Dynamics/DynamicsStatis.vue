<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">动态被查看统计</p>

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
import { getWhoSeeListstatisticalLog } from '@/api/user'
import { formatDate } from '@/common/util'

/**
"id": 172,
"userid": "13380615",
"to_userid": "58741616",
"dynamic_id": 12,
"community_id": 2,
"label": 0,
"createtime": 1540605775,
"seenumber": 90,
"to_nickname": "mc豪哥",
"from_nickname": null,
"to_sex": "男",
"from_sex": null
 */
export default {
  name: 'DynamicsStatis',
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
        { title: '查看总数', key: 'seenumber' },
        { title: '动态发布人用户id', key: 'userid' },
        { title: '分享者的用户id', key: 'to_userid' },
        { title: '动态id', key: 'dynamic_id' },
        { title: '话题id', key: 'community_id' },
        { title: '标签', key: 'label', render: (h, params) => h('span', params.row.label === 0 ? '图片类' : '语音类') },
        { title: '分享时间', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        { title: '分享人昵称', key: 'from_nickname' },
        { title: '被分享人昵称', key: 'to_nickname' },
        { title: '分享人性别', key: 'from_sex' },
        { title: '被分享人性别', key: 'to_sex' }
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
      getWhoSeeListstatisticalLog(pageNum, pageSize).then(data => {
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

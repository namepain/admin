<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">动态被查看记录</p>

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
import { getWhoSeeListLog } from '@/api/user'
import { formatDate } from '@/common/util'

/**
"id": 421,
"userid": "96743968",
"to_userid": "30000004",
"dynamic_id": 1,
"community_id": 4,
"label": 0, 0表示图片类，1表示语音类
"createtime": 1543568185,
"to_nickname": "曾大帅",
"from_nickname": "森夏",
"to_sex": "男",
"from_sex": "女"
 */
export default {
  name: 'DynamicsList',
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
      getWhoSeeListLog(pageNum, pageSize).then(data => {
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

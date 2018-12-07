<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">礼物列表</p>

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
import { getliststatisticalgift } from '@/api/user'
// import { formatDate } from '@/common/util'

/**
"id": 0,
"giftallnumber": 1,
"createtime": 0,
"type": 0,
"allcoins": 20,
"mobile": "18137854722",
"to_mobile": "18620769986",
"address": null,
"name": null,
"confession_content": null,
"to_nickname": "👯👯讲故事的小娘子",
"from_nickname": "哈哈哈",
"to_sex": "女",
"from_sex": "男"
 */
export default {
  name: 'GiftsStatis',
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
        { title: '总数量', key: 'giftallnumber' },
        { title: '礼物类型', key: 'type', render: (h, { row: { type } }) => h('span', type === 0 ? '普通礼物' : type === 1 ? '限量礼物' : '特效礼物') },
        { title: '总金币', key: 'allcoins' },
        { title: '赠送人电话', key: 'mobile' },
        { title: '被赠送人电话', key: 'to_mobile' },
        // { title: '图片地址', key: 'address' },
        // { title: '礼物名称', key: 'name' },
        // { title: '赠送时间', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        { title: '赠送人性别', key: 'from_sex' },
        { title: '被赠送人性别', key: 'to_sex' },
        { title: '赠送人昵称', key: 'from_nickname' },
        { title: '被赠送人昵称', key: 'to_nickname' }
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
      getliststatisticalgift(pageNum, pageSize).then(data => {
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

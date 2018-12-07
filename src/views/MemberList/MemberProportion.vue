<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">用户分成列表</p>

    <Row type="flex" justify="end" align="middle" class="mb10">
      <Input v-model.trim="searchParam.mobile" placeholder="mobile" clearable class="w220 mr10"></Input>

      <Button type="primary" icon="ios-search" :loading="loading" @click="getList(1)">查询</Button>
    </Row>
    <Table :columns="columns" :data="data" :loading="loading" size="small" class="mt20"></Table>
    <Row type="flex" justify="end" align="middle" class="mt10">
      <Page :total="searchParam.total"
            :page-size="searchParam.pageSize" :current.sync="searchParam.pageNum"
            @on-change="getList"
      > </Page>
    </Row>

    <Modal v-model="modal">
      <Form :label-width="100">
        <FormItem label="手机号">
          <Input v-model.trim="formItem.mobile" placeholder="手机号" ></Input>
        </FormItem>
        <FormItem label="通话分成比例(%)">
          <InputNumber :max="10" :min="0" :precision="0" v-model="formItem.call_proportion" placeholder="通话分成比例(%)" style="width:100%;"></InputNumber>
        </FormItem>
        <FormItem label="普通礼物分成比例(%)">
          <InputNumber :max="10" :min="0" :precision="0" v-model="formItem.common_proportion" placeholder="普通礼物分成比例(%)" style="width:100%;"></InputNumber>
        </FormItem>
        <FormItem label="限量礼物分成比例(%)">
          <InputNumber :max="10" :min="0" :precision="0" v-model="formItem.limit_proportion" placeholder="限量礼物分成比例(%)" style="width:100%;"></InputNumber>
        </FormItem>
        <FormItem label="特效礼物分成比例(%)">
          <InputNumber :max="10" :min="0" :precision="0" v-model="formItem.speciall_proportion" placeholder="特效礼物分成比例(%)" style="width:100%;"></InputNumber>
        </FormItem>
        <FormItem label="类型">
          <Select v-model="formItem.type" placeholder="类型">
            <Option :value="0">不通知</Option>
            <Option :value="1">通知</Option>
          </Select>
        </FormItem>
      </Form>
      <Row type="flex" justify="end" slot="footer">
        <Button @click="modal = false">取消</Button>
        <Button type="primary" @click="update">确定</Button>
      </Row>
    </Modal>
  </Card>
</template>

<script>
import { selectAllproportion, UpdateUserproportion } from '@/api/user'
import { formatDate } from '@/common/util'

/**
"id": 55,
"call_proportion": 5,
"common_proportion": 5,
"limit_proportion": 5,
"speciall_proportion": 5,
"createtime": 1543625638,
"updatetime": 1543625638,
"mobile": "18551924426",
"nickname": "姬小疯",
"sex": "女"
 */
export default {
  name: 'MemberProportion',
  data () {
    return {
      modal: false,
      formItem: {
        mobile: '',
        call_proportion: 0,
        common_proportion: 0,
        limit_proportion: 0,
        speciall_proportion: 0,
        type: 0
      },
      loading: false,
      searchParam: {
        mobile: '',
        pageNum: 1,
        pageSize: 20,
        total: 0
      },

      columns: [
        { title: 'ID', key: 'id' },
        { title: '手机号', key: 'mobile' },
        { title: '通话分成比例(%)', key: 'call_proportion' },
        { title: '普通礼物分成比例(%)', key: 'common_proportion' },
        { title: '限量礼物分成比例(%)', key: 'limit_proportion' },
        { title: '特效礼物分成比例(%)', key: 'speciall_proportion' },
        { title: '创建时间', key: 'createtime', render: (h, { row: { createtime } }) => h('span', formatDate(createtime * 1000)) },
        { title: '更新时间', key: 'updatetime', render: (h, { row: { updatetime } }) => h('span', formatDate(updatetime * 1000)) },
        { title: '昵称', key: 'nickname' },
        { title: '性别', key: 'sex' },
        {
          title: '操作',
          key: 'action', /* eslint-disable-next-line */
          render: (h, { row: { mobile, call_proportion, common_proportion, limit_proportion, speciall_proportion } }) => {
            return h('Button', {
              props: { type: 'warning', size: 'small' },
              on: {
                click: () => {
                  this.formItem.mobile = mobile /* eslint-disable-next-line */
                  this.formItem.call_proportion = call_proportion /* eslint-disable-next-line */
                  this.formItem.common_proportion = common_proportion /* eslint-disable-next-line */
                  this.formItem.limit_proportion = limit_proportion /* eslint-disable-next-line */
                  this.formItem.speciall_proportion = speciall_proportion
                  this.modal = true
                }
              }
            }, '修改分成')
          }
        }
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
      let { mobile, pageNum, pageSize } = this.searchParam
      this.loading = true
      selectAllproportion(mobile, pageNum, pageSize).then(data => {
        this.data = data.list
        this.searchParam.total = data.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },

    // 修改
    update () {
      UpdateUserproportion(this.formItem).then(data => {
        this.modal = false
        this.getList()
      })
    }
  }
}
</script>

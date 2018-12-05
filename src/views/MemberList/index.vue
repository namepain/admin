<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">会员列表</p>

    <Row type="flex" justify="end" align="middle" class="mb10">
      <Input v-model="searchParam.nickname" placeholder="nickname" clearable class="w220 mr10"></Input>
      <Input v-model="searchParam.phone" placeholder="phone" clearable class="w220 mr10"></Input>

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
import { selectuserbychoose } from '@/api/user'

/**
 * `id` int(100) NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '手机号',
  `password` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '密码',
  `is_signing` int(2) DEFAULT '0' COMMENT '0为签约，1签约',
  `nickname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户昵称',
  `coin` int(100) DEFAULT '0' COMMENT '用户拥有的总金币数量',
  `state` int(10) DEFAULT '0' COMMENT '0有空1忙碌2勿扰',
  `sex` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '性别',
  `charm_value` int(100) DEFAULT '0' COMMENT '魅力值',
  `heroism_value` int(100) DEFAULT '0' COMMENT '豪气值',
  `call_duration` int(100) DEFAULT '0' COMMENT '当前收费标准 通话时长/分钟',
  `photo_address` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '主头像地址',
  `personal_introduction` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '个人介绍',
  `signature` varchar(300) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '签名',
  `age` int(100) DEFAULT '0' COMMENT '年龄',
  `userid` int(8) NOT NULL DEFAULT '30000000' COMMENT '用户id,随机8位数字,默认为以3开头的',
   `answer` int(2) DEFAULT '0' COMMENT '0表示接听1表示不接听(字段废弃)---启动字段作为是否登录的表示，默认为0登录，登出后修改为1登出(不执行推送)',
   `platform` int(2) DEFAULT '0' COMMENT '0表示ios1表示Android',
 */
export default {
  name: 'MemberList',
  data () {
    return {
      loading: false,
      searchParam: {
        nickname: '',
        phone: '',
        pageNum: 1,
        pageSize: 20,
        total: 0
      },

      columns: [
        { title: 'ID', key: 'id' },
        { title: '手机号', key: 'phone' },
        { title: '密码', key: 'password' },
        { title: '是否签约', key: 'is_signing' },
        { title: '用户昵称', key: 'nickname' },
        { title: '用户拥有的总金币数量', key: 'coin' },
        { title: '状态', key: 'state', render: (h, { row: { state } }) => h('span', state === 0 ? '有空' : state === 1 ? '忙碌' : state === 2 ? '勿扰' : '未知') },
        { title: '性别', key: 'sex' },
        { title: '魅力值', key: 'charm_value' },
        { title: '豪气值', key: 'heroism_value' },
        { title: '当前收费标准 通话时长/分钟', key: 'call_duration' },
        { title: '主头像地址', key: 'photo_address' },
        { title: '个人介绍', key: 'personal_introduction' },
        { title: '签名', key: 'signature' },
        { title: '年龄', key: 'age' },
        { title: '用户id', key: 'userid' },
        { title: 'answer', key: 'answer' },
        { title: '平台', key: 'platform', render: (h, { row: { platform } }) => h('span', platform === 0 ? 'ios' : 'Android') }
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
      let { nickname, phone, pageNum, pageSize } = this.searchParam
      this.loading = true
      selectuserbychoose(nickname, phone, pageNum, pageSize).then(data => {
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

<template>
  <Card class="memberList " :bordered="false" dis-hover>
    <p slot="title">用户列表</p>

    <Row type="flex" justify="end" align="middle" class="mb10">
      <Input v-model.trim="searchParam.nickname" placeholder="nickname" clearable class="w220 mr10"></Input>
      <Input v-model.trim="searchParam.phone" placeholder="phone" clearable class="w220 mr10"></Input>

      <Button type="primary" icon="ios-search" :loading="loading" @click="getList(1)">查询</Button>
    </Row>
    <Table :columns="columns" :data="data" :loading="loading" size="small" class="mt20"></Table>
    <Row type="flex" justify="end" align="middle" class="mt10">
      <Page :total="searchParam.total"
            :page-size="searchParam.pageSize" :current.sync="searchParam.pageNum"
            @on-change="getList"
      > </Page>
    </Row>

    <Modal v-model="modal" title="赠送的金币数量">
      <Input v-model.trim="coin" placeholder="唤醒赠送的金币数量"></Input>
      <div slot="footer">
        <Button @click="modal = false">取消</Button>
        <Button type="primary" @click="wakeUp">确定</Button>
      </div>
    </Modal>
  </Card>
</template>

<script>
import { selectuserbychoose, noticeUserUploadVoice, wakeUpBymobile } from '@/api/user'

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
      modal: false,
      loading: false,
      phone: '',
      coin: 0,
      searchParam: {
        nickname: '',
        phone: '',
        pageNum: 1,
        pageSize: 20,
        total: 0
      },

      columns: [
        { title: 'ID', minWidth: 50, key: 'id' },
        { title: '手机号', minWidth: 120, key: 'phone' },
        { title: '密码', minWidth: 100, key: 'password' }, /* eslint-disable-next-line */
        { title: '是否签约', minWidth: 80, key: 'is_signing', render: (h, { row: { is_signing } }) => h('span', is_signing === 0 ? '未签约' : '已签约') },
        { title: '用户昵称', minWidth: 100, key: 'nickname' },
        { title: '用户拥有的总金币数量', minWidth: 100, key: 'coin' },
        { title: '状态', minWidth: 80, key: 'state', render: (h, { row: { state } }) => h('span', state === 0 ? '有空' : state === 1 ? '忙碌' : state === 2 ? '勿扰' : '未知') },
        { title: '性别', minWidth: 80, key: 'sex' },
        { title: '魅力值', minWidth: 80, key: 'charm_value' },
        { title: '豪气值', minWidth: 80, key: 'heroism_value' },
        { title: '当前收费标准 通话时长/分钟', minWidth: 100, key: 'call_duration' },
        { title: '主头像地址', minWidth: 100, key: 'photo_address' },
        { title: '个人介绍', minWidth: 100, key: 'personal_introduction' },
        { title: '签名', minWidth: 100, key: 'signature' },
        { title: '年龄', minWidth: 80, key: 'age' },
        { title: '用户id', minWidth: 80, key: 'userid' },
        { title: '登录状态', minWidth: 80, key: 'answer', render: (h, { row: { answer } }) => h('span', answer === 0 ? '登录' : '登出') },
        { title: '平台', minWidth: 80, key: 'platform', render: (h, { row: { platform } }) => h('span', platform === 0 ? 'ios' : 'Android') },
        {
          title: '操作',
          key: 'action',
          width: 180,
          fixed: 'right',
          render: (h, { row: { phone, platform, sex, coin } }) => {
            return h('div', [
              h('Button', { props: { type: 'info', size: 'small' }, style: { marginRight: '5px' }, on: { click: () => this.notice(phone, platform, sex) } }, '通知上传语音'),
              h('Button', {
                props: { type: 'success', size: 'small' },
                on: {
                  click: () => {
                    this.phone = phone
                    this.modal = true
                  }
                }
              }, '唤醒')
            ])
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
      let { nickname, phone, pageNum, pageSize } = this.searchParam
      this.loading = true
      selectuserbychoose(nickname, phone, pageNum, pageSize).then(data => {
        this.data = data.list
        this.searchParam.total = data.total
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },

    // 通知用户上传遇音
    notice (phone, platform, sex) {
      // ...
      noticeUserUploadVoice(phone, platform, sex).then(data => {
        this.$Notice.success({
          title: '成功',
          desc: '通知用户上传语音成功'
        })
      })
    },

    // 唤醒用户
    wakeUp () {
      // ...
      wakeUpBymobile(this.phone, this.coin).then(data => {
        this.modal = false
        this.$Notice.success({
          title: '成功',
          desc: '唤醒用户成功'
        })
      })
    }
  }
}
</script>

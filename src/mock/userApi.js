import Mock from 'mockjs'
import { pasreQuery } from '@/common/util'

export default {
  getUserList: ({ url }) => {
    let { pageNum, pageSize } = pasreQuery(url)
    let total = ~~(Math.random() * 10) + 11
    return {
      status: '1001',
      tips: '登陆成功',
      data: {
        total: total,
        list: genarateUserArray(+pageNum, +pageSize, +total)
      }
    }
  },

  getRoleList: () => {
    return {
      status: '1001',
      tips: '获取角色列表成功！',
      data: {
        total: 5,
        list: [
          { id: 1, role: 'admin', name: '管理员', desc: '管理员，叫爸爸', remark: '' },
          { id: 2, role: 'user', name: '用户', desc: '二逼青年', remark: '' },
          { id: 3, role: 'cat', name: '猫', desc: 'mewo~', remark: '' },
          { id: 4, role: 'dog', name: '狗', desc: 'bark!', remark: '' },
          { id: 5, role: 'smartisian', name: '锤子', desc: '锤子哦', remark: '' }
        ]
      }
    }
  }
}

function genarateUserArray (pageNum, pageSize, total) {
  // 计算当页长度
  let len = (total / pageSize >= pageNum) ? pageSize : (total % ((pageNum - 1) * pageSize))
  let start = (pageNum - 1) * pageSize

  let list = [
    { id: '1', role: 'admin', name: '管理员', password: '666666', createtime: +Mock.Random.date('T'), status: 'success' }
  ]
    .concat(new Array(total - 1)
      .fill(null)
      .map((item, i) => {
        return Mock.mock({
          id: i + 2,
          role: 'user',
          name: '@name()',
          password: Mock.Random.id().slice(-6),
          createtime: +Mock.Random.date('T'),
          'status|1': ['success', 'freeze']
        })
      })
    )

  return list.slice(start, start + len)
}

/**
 * 格式化时间
 * @param {Date} date
 * @param {String} fmt
 */
export function formatDate (date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  if (!date || String(date) === 'Invalid Date') return ''
  if (!(date instanceof Date)) {
    date = new Date(date)
    if (date.toString() === 'Invalid Date') return ''
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).slice(str.length))
    }
  }
  return fmt
}

/**
 * 扁平化数组
 * @param {Array} arr
 */
export function flatten (arr) {
  return arr.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), [])
}

export function parseSeconds (seconds) {
  let parser = [
    { desc: '天', unit: 24 * 60 * 60 },
    { desc: '小时', unit: 60 * 60 },
    { desc: '分', unit: 60 },
    { desc: '秒', unit: 1 }
  ]
  if (+seconds === 0) {
    return '0秒'
  }
  return parser.reduce((a, b) => {
    let num = ~~(seconds / b.unit)
    seconds %= b.unit
    if (num) {
      a += num + b.desc
    }
    return a
  }, '')
}

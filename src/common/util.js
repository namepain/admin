/**
 * 格式化时间
 * @param {*} date
 * @param {*} fmt
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

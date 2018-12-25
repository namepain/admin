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

/**
 * 根据秒格式化出 天，时，分，秒
 * @param {Number} seconds
 */
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

/**
 * 获取 url 中的参数
 * @param {String} url
 */
export function pasreQuery (url = '') {
  let query = (url.split('?')[1] || '').split('&')
  return query.reduce((a, b) => {
    let pair = b.split('=')
    let value = decodeURIComponent(pair[1])
    a[pair[0]] = value
    return a
  }, {})
}

/**
 * 节流函数
 * @param {function} fn
 * @param {number} delay
 */
// export function throttle (fn, delay = 60) {
//   let timestamp = 0
//   return function (...args) {
//     let now = +new Date()
//     if (now - timestamp >= delay) {
//       fn.apply(null, args)
//       timestamp = now
//     }
//   }
// }
export function throttle (fn, delay = 60, { leading = false, trailing = true } = {}) {
  let timestamp = 0
  let timer
  return function (...args) {
    let now = +new Date() // 当前时间戳
    if (!leading) timestamp = now
    let remain = delay - (now - timestamp) // 本轮剩下时间
    if (remain <= 0 || remain > delay) { // remain > delay 是考虑到用户改变系统时间，导致 now 小于了 timestamp
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      fn.apply(this, args)
      timestamp = now
    } else if (!timer && trailing) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timestamp = +new Date()
        timer = null
      }, remain)
    }
  }
}

/**
 * @param {Array} arr 扁平化一个对象数组
 * @param {String} key 对象的 key 属性为子数组
 */
export function flattenObjKey (arr, key) {
  return arr.reduce((a, b) => {
    return a.concat(
      Array.isArray(b[key])
        ? [].concat(b).concat(flattenObjKey(b[key], key))
        : b
    )
  }, [])
}

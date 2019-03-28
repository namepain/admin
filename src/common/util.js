/**
 * 格式化时间
 * @param {Date} date
 * @param {String} fmt
 */
export function formatDate (date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  date = new Date(date)
  if (date.toString() === 'Invalid Date') {
    return ''
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
 * 防抖函数
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 */
export function debounce (func, wait, immediate) {
  var timeout, result

  var debounced = function () {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return result
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
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

/**
 * 挑出对象中有用的属性
 * @param {Object} obj
 */
export function _pickUseful (obj) {
  return Object.keys(obj).reduce((prev, curr) => {
    let value = obj[curr]
    if (value !== null && value !== undefined && value !== '') {
      prev[curr] = value
    }
    return prev
  }, {})
}

/**
 * 得到本月第一天是星期几
 * @param {Date} date
 */
export const getFirstDayOfMonth = function (date) {
  const temp = new Date(date.getTime())
  temp.setDate(1)
  return temp.getDay()
}

/**
 * 根据年,月索引得到该月天数
 * @param {number} year
 * @param {number} month
 */
export const getDayCountOfMonth = function (year, month) {
  return new Date(year, month + 1, 0).getDate()
}

/**
 * 判断对象类型
 * @param {Object} obj
 */
export const typeOf = function (obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

/**
 * 深克隆
 * @param {Object} data
 */
export const deepCopy = function (data) {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}

/**
 * 格式化千分位
 * @param {number, Stirng} str
 */
export const formatThousandth = (str, delimiter) => {
  var arr = String(str).split('.')
  arr[0] = arr[0].replace(/(\B)(?=(\d{3})+$)/g, delimiter || ',')
  return arr.join('.')
}

/**
 * iview 表单属性深度校验 creator
 * @param  {...any} props
 */
export const createValid = function (...props) {
  return (value, rule, callback) => {
    let valid = props.every((prop) => !!prop.split('.').reduce((prev, next) => prev[next], this))
    if (!valid) {
      callback(new Error())
    } else {
      callback()
    }
  }
}

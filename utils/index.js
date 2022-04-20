function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    // obj 是 null ，或者不是对象和数组，直接返回
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (const key in obj) {
    // 保证 key 不是原型的属性
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 递归调用！！！
      result[key] = deepClone(obj[key])
    }
  }
  // 返回结果
  return result
}


// 防抖
function debounce(fn, delay = 500) {
  // timer 是闭包中的
  let timer = null

  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

// 节流
function throttle(fn, delay = 100) {
  let timer = null

  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

/* 排除对象指定健 */
function omit(obj, fields) {
  const shallowCopy = Object.assign({}, obj);
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}

/* 找出对象指定健 */
const pick = (obj, ...fields) => {
  let pickArr = fields
  if (Array.isArray(...fields)) { // 传入的是数组
    pickArr = fields[0]
  }
  return pickArr.reduce((res, item) => {
    if (Object.prototype.hasOwnProperty.call(obj, item)) {
      res[item] = obj[item]
    }
    return res
  }, {})
}


/* 生产唯一ID */
function generateRandomKey(prefix) {
  if (prefix == null) {
    prefix = 'artist'
  }

  const userAgent = window.navigator.userAgent
    .replace(/[^a-zA-Z0-9]/g, '')
    .split('')
  let mid = ''
  for (let i = 0; i < 12; i++) {
    mid += userAgent[Math.round(Math.random() * (userAgent.length - 1))]
  }
  const time = new Date().getTime()

  return prefix + '_' + mid + '_' + time
}

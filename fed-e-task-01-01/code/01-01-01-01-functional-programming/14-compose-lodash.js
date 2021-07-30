// lodash 中的函数组合的方法 _.flowRight()
const _ = require('lodash')

// lodash 中组合函数 ﬂow() 或者 ﬂowRight()，他们都可以组合多个函数
// ﬂow() 是从左到右运行
// ﬂowRight() 是从右到左运行，使用的更多一些

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()


// 洋葱
console.log('洋葱 -->', toUpper(first(reverse(['one', 'two', 'three']))))

// 非洋葱（组合）
console.log(_.flowRight(toUpper, first, reverse)(['one', 'two', 'three']))

const _ = require('lodash')

//lodash 数据先，函数后
console.log('_.map([\'a\', \'b\', \'c\'], _.toUpper) -->', _.map(['a', 'b', 'c'], _.toUpper))
// _.map(['a', 'b', 'c'], _.toUpper)
// => ['A', 'B', 'C']

console.log(' _.map([\'a\', \'b\', \'c\'])-->', _.map(['a', 'b', 'c']))
// _.map(['a', 'b', 'c'])
// => ['a', 'b', 'c']

console.log('_.split(\'Hello World\', \' \') -->', _.split('Hello World', ' '))
// _.split('Hello World', ' ')
// => [ 'Hello', 'World' ]


// ------------------


// lodash 的 fp 模块 函数先，数据后
// 同样的需求 ，前面的例子中的代码可以简化成三行，
// NEVER SAY DIE  --> never-say-die

// 原来的代码
// const _ = require('lodash')
// 本质上也是手动curry化函数，把函数或者需要固定的参数提到前面，把数据放后面。。。
// const split = _.curry((sep, str) => _.split(str, sep))
// const join = _.curry((sep, array) => _.join(array, sep))
// const map = _.curry((fn, array) => _.map(array, fn))
//
// const f = _.flowRight(join('-'), map(_.toLower), split(' '))
// console.log(f('NEVER SAY DIE'))


const fp = require('lodash/fp')

const f = fp.flowRight(fp.join('-'), fp.map(fp.toLower), fp.split(' '))

console.log(f('NEVER SAY DIE'))

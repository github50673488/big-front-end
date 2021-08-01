// 函数组合 调试
// 需求 NEVER SAY DIE  --> never-say-die

const _ = require('lodash')

// 辅助函数，可以打印中间结果
// const log = v => {
//   console.log(v)
//   return v
// }

// 辅助函数加强，可以打印中间结果和添加tag说明 ， curry后 ，固定化tag后可以成为单param的函数，成为管道的一部分
const trace = _.curry((tag, v) => {
    console.log(tag, v)
    return v
})

// 把_.split() (两个参数的)curry后， 用的时候指定分隔符（sep），能形成一个只接受一个参数（要处理的字符串）新函数
const splitCurried = _.curry((sep, str) => _.split(str, sep))

// 把_.map (两个参数的)curry后， 用的时候指定一个处理函数（tolower），能形成一个只接受一个参数（要处理的数组）新函数
const mapCurried = _.curry((fn, array) => _.map(array, fn))

// 把_.join (两个参数的)curry后， 用的时候指定一个连接符（joinStr），能形成一个只接受一个参数（要处理的数组）新函数
const joinCurried = _.curry((joinStr, array) => _.join(array, joinStr))

const myComposedFun = _.flowRight(joinCurried('-'), trace('map 之后'), mapCurried(_.toLower), trace('split 之后'), splitCurried(' '))

console.log(myComposedFun('NEVER SAY DIE'))


// 上面要手动对 lodash原生的函数手动 curry ，太麻烦，实际工作中不用这么做，用 lodash fp模块即可

// 柯里化案例
// ''.match(/\s+/g)
// ''.match(/\d+/g)

const _ = require('lodash')

const match = _.curry(function (reg, str) {
    return str.match(reg)
})

// 固定化（消去）了第一个参数req
const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

console.log(haveSpace('helloworld'))
console.log(haveNumber('abc'))

const filter = _.curry(function (func, array) {
    return array.filter(func)
})

console.log(filter(haveSpace, ['John Connor', 'John_Donne']))

const findSpace = filter(haveSpace)
console.log(findSpace(['John Connor', 'John_Donne']))

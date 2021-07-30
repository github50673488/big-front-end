// 演示 lodash ---- 注意并非lodash全部都是纯函数，是lodash的fp模块里头的才是纯函数
// first / last / toUpper / reverse / each / includes / find / findIndex
const _ = require('lodash')

const array = ['jack', 'tom', 'lucy', 'kate']

console.log(_.first(array))
console.log(_.last(array))

console.log(_.toUpper(_.first(array)))

console.log(_.reverse(array)) // 这个不是纯函数，数组被反转了

const r = _.each(array, (item, index) => {
    console.log(item, index)
})

console.log(r)

console.log('array -->', array)
// _.find

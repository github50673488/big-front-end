// lodash 和 lodash/fp 模块中 map 方法的区别

const _ = require('lodash')

console.log(_.map(['23', '8', '10'], parseInt))
//  结果 [ 23, NaN, 2 ] ，错了

// 为什么，查看map的参数说明，他自动调用parseint的时候，自动传入了3个参数

// Creates an array of values by running each element in `collection` thru
// * `iteratee`. The iteratee is invoked with three arguments:
//     * (value, index|key, collection).
// 形成了下面的样子
// parseInt('23', 0, array)----> 23
// parseInt('8', 1, array) ---> Nan
// parseInt('10', 2, array)----> 2

// 要解决这儿问题只能自己封装parseInt ，让他只接受一个值。还有注意curry那个封装函数的时候把radix提前
const myParseInt = _.curry((radix, numStr) => {
    return parseInt(numStr, radix)
})
console.log(_.map(['23', '8', '10'], myParseInt(10)))


// --------------  而 fp的map就不用那么麻烦， 这个map只出一个。

const fp = require('lodash/fp')
console.log(fp.map(parseInt, ['23', '8', '10']))

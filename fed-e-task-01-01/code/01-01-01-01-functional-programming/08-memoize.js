// 纯函数的好处--- 可缓存 因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数第一次的运行结果缓存起来
// 记忆函数
// 我们想要提高性能的话，我们可以在这个函数第一次去执行的时候，当它执行完毕的时候，把这个结果去缓存起来，当我们第二次调用这个函数的时候，我们不需要在等待那么长的时间，而是直接从缓存中获取结果从而提高性能
const _ = require('lodash')

function getArea (r) {
    console.log(r)
    return Math.PI * r * r
}

let getAreaWithMemory = _.memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))


// 模拟 memoize 方法的实现

// function memoize (f) {
//     let cache = {}
//     return function () {
//         let key = JSON.stringify(arguments)
//         cache[key] = cache[key] || f.apply(f, arguments)
//         return cache[key]
//     }
// }
//
// let getAreaWithMemory = memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))

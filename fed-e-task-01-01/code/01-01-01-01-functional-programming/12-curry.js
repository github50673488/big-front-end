// 模拟实现 lodash 中的 curry 方法

function getSum(a, b, c) {
    return a + b + c
}

const curried = curry(getSum)

console.log(curried(1, 2, 3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))


function curry(func) {
    return function curriedFn(...args) {// args，实参数组，用es6的剩余参数...  (210731 由于语法一样，经常把展开操作和剩余参数搞混乱，其实这两个可以说是相反的操作)
        // console.log('args -->', args)
        // 判断实参个数（args.length）和形参个数（func.length），如果小于等于，返回一个新的函数
        if (args.length < func.length) {
            // （如果实参<形参）这里形成了闭包, 第一次传过来的参数（如curried(1)里头的1），会缓存入args，下次调用的时候，会用上
            // 而第二次用的参数是 Array.from(arguments)，然后需要把他们合并起来，（arguments不是数组，是假数组，需要用Array.from）
            // 合并后要展开 用...
            return function () { // 这里的括号里头实际上隐含有第二次调用的参数arguments
                // 展开语法 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_syntax
                // 实际上 fn(...args) 就相当于 es5的 fn.apply(null,arguments)
                return curriedFn(...args.concat(Array.from(arguments)))
            }
        }
        // 如果实参>=形参（绝大多数的情况是相同的时候把）， 则执行传过来的参数，如上面的 curried(1, 2, 3)
        return func(...args)
    }
}

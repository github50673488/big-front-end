// 高阶函数-函数作为返回值

const makeFn = () => {
    let msg = 'Hello function'
    return () => {
        console.log(msg)
    }
}

let newFn = makeFn()
newFn()

// once
// const once = (fn) => {
//     let done = false
//     // return () => { //2100730  注意!! 这里不能改造成箭头函数，因为下面有this！！
//     return function () {
//         if (!done) {
//             done = true
//             // return fn.apply(this, arguments)
//             fn.apply(this, arguments) // 在这个例子里头不return也可以
//         }
//     }
// }
//
// const unSafePay = money => {
//     console.log(`支付: ${money} RMB`)
// }
// let safePay = once(unSafePay)
// safePay(5)
// safePay(5)
// safePay(5)


const once = (fn) => {
    let done = false
    // return () => { //2100730  注意!! 这里不能改造成箭头函数，因为下面有this和 arguments！！
    return function () {
        if (!done) {
            done = true
            console.log('this -->', this)
            return fn.apply(this, arguments)// 在这个例子里头就要return了
        }
    }
}

const unSafePay = money => {
    return `支付: ${money} RMB`
}
let safePay = once(unSafePay)
console.log('safePay(5) -->', safePay(5))
console.log('safePay(5) -->', safePay(5))
console.log('safePay(5) -->', safePay(5))


// 2021729 liu 高阶函数中的返回函数，丢一个函数进去，返回一个函数出来，功能经过了加工，比如说上面的safePay，就经过了once的加工，变得更加安全

//我们通过闭包来实现一个只能执行一次的函数
// let once = (fn) => {
//     let done = false
//     return function () {// 在这里我们不确定传参个数 , 2100730  注意!! 这里不能改造成箭头函数，因为下面有this！！
//         if (!done) {
//             done = true // 已经被执行
//             //arguments是具有数组某些特性的'类数组'（伪数组)
//             //每个函数都有一个Arguments对象实例arguments
//             //它引用着函数的实参，可以用数组下标的方式'[]'引用arguments的元素
//             return fn.apply(this, arguments)//通过arguments来取实参
//         }
//     }
// }
//
// const unSafePay = money => {
//     console.log(`支付: ${money} RMB`)
// }
//
// let safePay = once(unSafePay)
//
// // 只会支付一次
// safePay(5)
// safePay(5)
// safePay(5)

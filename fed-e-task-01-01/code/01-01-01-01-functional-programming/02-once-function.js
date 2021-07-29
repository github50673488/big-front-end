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
const once = (fn) => {
    let done = false
    return () => {
        if (!done) {
            done = true
            return fn.apply(this, arguments)
        }
    }
}

const unSafePay = money => {
    console.log(`支付: ${money} RMB`)
}
let safePay = once(unSafePay)
safePay(5)
safePay(5)
safePay(5)
safePay(5)

// 2021729 高阶函数中的返回函数，丢一个函数进去，返回一个函数出来，功能经过了加工，比如说上面的pay，就经过了once的加工，变得更加安全


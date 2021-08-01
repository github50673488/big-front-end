// point free
// Hello     World => hello_world
const fp = require('lodash/fp')
// fp.replace经过了curry化， fp.replace(/\s+/g, '_') 只传入了两个参数，
// 所以他返回了一个新的只剩下一个参数的函数，可以参加函数的组合
const f = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)

console.log(f('Hello     World'))

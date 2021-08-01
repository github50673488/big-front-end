// Task 处理异步任务
const fs = require('fs')
const {task} = require('folktale/concurrency/task')// 自行查看官网
const {split, find} = require('lodash/fp')

function readFile(filename) {
    // readFile异步
    // task函数本身接受的函数是固定的 resolver
    return task(resolver => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) resolver.reject(err)

            resolver.resolve(data)
        })
    })
}

readFile('package.json')
    .map(split('\n'))
    .map(find(x => x.includes('version')))
    .run()
    .listen({
        onRejected: err => {
            console.log(err)
        },
        onResolved: value => {
            console.log(value)
        }
    })

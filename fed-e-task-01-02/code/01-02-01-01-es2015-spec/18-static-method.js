// static 方法

class Person {
  constructor (name) {
    this.name = name
  }

  say () {
    console.log(`hi, my name is ${this.name}`)
  }

  static create (name) {
    return new Person(name)
  }

    // 需要注意的是：由于静态方法是挂载到类型上的，所以在静态方法内部，this就不会指向某个实例对象，而是当前的类型。
    //
    // #extends
}

const tom = Person.create('tom')
tom.say()

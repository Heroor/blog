{{
    title: 'ts',
    poster: '',
    date: '2018-08-30',
    id: '5',
    desc: 'TypeScript 是 JavaScript 的超集，她为 JavaScript 提供了类型注解、静态类型检查的功能，以及一些新的特性，TypeScript 可以编译成 JavaScript 代码，在不同平台上运行'
}}

> TypeScript 是 JavaScript 的超集，她为 JavaScript 提供了类型注解、静态类型检查的功能，以及一些新的特性，TypeScript 可以编译成 JavaScript 代码，在不同平台上运行

## TypeScript 基本类型的定义：

### 数字、字符串、布尔值
```ts
let age: number = 18
let name: string = 'tom'
let show: boolean = false
```

### 数组 一种特殊的元祖
```ts
let list: number[] = [1,2,3]
let list Array<number> = [1,2,3]
```

### 元组
```ts
let list: [string, number]
list = ['tom', 18]
```
当越界访问或创建元素时，以联合类型为标准：
```ts
list 的联合类型为(string | number)
list[2] = 123 // 123
list[3] = true // Error! 不能将 true 分配给 (string | number) 类型
```

### 枚举
```ts
enum Animal {dog, cat, pig = 100}
let dog: Animal = Animal.dog
let cat: Animal = Animal.cat
let pig: Animal = Animal.pig
let petName: string = Animal[1] // 通过值获取 key
dog // 0
cat // 1
pig // 100
petName // cat
```

### Any
给不确定的类型定义 any 时，ts 将不进行类型检查：
```ts
let someValue: any = 18
someValue = 'tom'
someValue = false
```

### Void
void 类型表示没有任何类型，当函数没有返回值时则是 void 类型
```ts
function foo (): void {
  console.log('no return')
}
```
void 类型只能赋值为 undefiend 和 null

### Null、Undefined
null 和 undefined 拥有各自的类型，并且他们也是所有类型的子类型，所以可以赋值给其他类型的变量：
```ts
let a: undefined = undefined
a = null
let b: null = undefined
b = undefined
let n: number = 123
n = undefined // 将 undefined 赋值给 number 类型
```
使用 --strictNullChecks 模式，undefined 只能赋值给 undefined 和 void 类型；null 只能赋值给 null 类型

### Never
never 类型表示不会有值存在的类型，例如永远没有返回值的函数，
```ts
function foo (): never {
  throw new Error()
}
var a: never = (function () {
  throw new Error('ads')
})()
```

### 类型断言
当你确切知道值的类型，可以使用类型断言来手动指定类型，告诉 ts 应该按你说的做
类型断言有两种方式，可以根据你的喜好来书写，但是在 jsx 中只有 as 的方式可以使用：
1. <类型>值
2. 值 as 类型
```ts
let value: (string | number) = 'My name is Tom'
let isLongString: boolean = (value as string).length > 10
let hi: string = 'hello! ' + <string>value
```

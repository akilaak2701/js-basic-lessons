const age = 100
const money = 1000.5
console.log(typeof age)
console.log(typeof money)
console.log('10' * '10')
console.log('10' - '3')

console.log(Math.round(2.2))
console.log(Math.floor(2.6))
console.log(Math.ceil(2.4))
console.log(Math.random())

const sweet = 20
const kids = 3
const eachKidGets = Math.floor(sweet / kids)
console.log(eachKidGets)
const leftKids = sweet % kids
console.log(leftKids)

const x = 2 ** 3
console.log(x)
// eslint-disable-next-line semi
console.log(0.1 + 0.4);
console.log(0.1 + 0.2)

console.log(typeof Infinity)
console.log(typeof -Infinity)

const result = 10 / 'hello'
console.log(typeof NaN)

const y = 100
const res = Number.isInteger(y)
console.log(`Is y a number: ${res}`)

const z = 'abcd'
let soln = Number.isInteger(z)
console.log(`Is z a number: ${soln}`)
soln = (typeof z === 'string')
console.log(`Is z a string: ${soln}`)
const flag = true
soln = (typeof flag === 'boolean')
console.log(`Is flag a boolean: ${soln}`)
const nos = [1, 2, 3, 4, 5]
soln = (typeof nos === 'object')
console.log(`Is nos an object: ${soln}`)

function doSomeTask () {
  const x = 100
  const y = 20
  console.log('x:' + x + 'y:' + y)
}
doSomeTask()
console.log('completed')

function outer () {
  const outerVar = 'Hey Iam the outer var!'
  // console.log(outerVar);
  function inner () {
    const innerVar = 'Hey Iam the inner var!'
    console.log(innerVar)
    console.log(outerVar)
    // closure - captured variable
  }
  // console.log(innerVar);  // Uncaught ReferenceError: innerVar is not defined at outer
  // inner();  // call to inner() from outer()
  return inner
}
// outer();
// outer.inner();
const innerFunc = outer()
innerFunc()
// innerFunc = null;
// it only allocate memory to outer() not to inner(), because we didn't call it.
// inner() variable does not access in outer, the memory was not allocated.
// in nested func does not call the inner func from outside

function createGreeting (greeting = '') {
  const myGreet = greeting.toUpperCase()
  return function (name) {
    return `${myGreet} ${name}`
  }
}
const greet = createGreeting('Hello')
console.log(greet('AKILA'))

const sayHello = createGreeting('hello')
const sayVanakkam = createGreeting('vanakkam')
console.log(sayHello('AKILA'))
console.log(sayVanakkam('Tamil'))
console.log(sayVanakkam('AKILA'))

function createGame (gameName) {
  let score = 0
  return function win () {
    score++
    return `Your name ${gameName} score is ${score}`
  }
}
const winner = createGame('AKILA')
console.log(winner('100'))

const hockeyGame = createGame('Hockey')
const soccerGame = createGame('Soccer')
hockeyGame()
hockeyGame()
soccerGame()
soccerGame()

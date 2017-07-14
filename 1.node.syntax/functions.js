/**
 * Defining a function:
 *   1- variable style
 *   2- function style
 */

let f = function (x) {
  return x * 2
}

function ff (x) {
  return x * 2
}

/**
 * Two types of functions:
 *   1- default function
 *   2- arrow function
 */

let fff = (x) => {
  return x * 2
}

let ffff = x => x * 2

/**
 * Difference?
 */

let aNormalFunction = function (x) {
  // console.log(Object.keys(this))
  return x * 2
}

let anArrowFunction = (x) => {
  // console.log(this)
  return x * 2
}

console.log(aNormalFunction(2))
console.log(anArrowFunction(2))

console.log('########################################')

/**
 * In javascript, osoolan: functions are everywhere
 */

let fnArray = [f, ff, fff, ffff]
let fnObj = {
  normal: aNormalFunction,
  arrow: anArrowFunction
}

console.log(fnArray[2](5))
console.log(fnObj.arrow(3))

console.log('########################################')

/**
 * Callback functions
 */

function WRONG () {
  // Do something very very long
  return 'result'
}

function CORRECT (cb) {
  // DO something very very long
  // return the `result` string after two seconds
  setTimeout(() => {
    cb('result')
  }, 5000)
}

// how can we call CORRECT?
// functions can be passed in as an argument to a function, just like a variable

let correctHandler = (data) => {
  console.log(`CORRECT callback was naw called with ${data}`)
}

CORRECT(correctHandler)

// Why is this so cool?
// It does not BLOCK the code
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')
console.log('will I be blocked by calling CORRECT?')

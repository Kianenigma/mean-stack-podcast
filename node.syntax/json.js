let anyObject = {
  name: 'kian',
  foo: 'bar',
  bar: [1, 2, 3]
}

console.log(anyObject)
console.log(typeof (anyObject))
let jsonString = JSON.stringify(anyObject)
console.log(jsonString)
console.log(typeof (jsonString))

let backToObject = JSON.parse(jsonString)
console.log(backToObject.name, typeof (backToObject))

/**
 * Why is json so cool? it's string and it can be sent over a network
 */

console.log('########################################')

/**
 * a Note about objects
 * Objects and arrays can be changed inside a function (be careful)
 */

let modifier = (o) => o.foo = 'foo'

let anObj = {}
let aShallowCopy = anObj

// so how can we create a deep copy? one simple way:
let aDeepCopy = JSON.parse(JSON.stringify(anObj))
modifier(anObj)

console.log('original: ', anObj)
console.log('shallow: ', aShallowCopy)
console.log('deep: ', aDeepCopy)

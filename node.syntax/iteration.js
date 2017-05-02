let aName = 'Kian'
let aNumber = 10
let anArray = [1, 2, 'Peymani', aName]
let person = {
  name: aName,
  id: aNumber,
  age: 22,
  anythingElese: anArray
}

// Iteration
// Index
// Array
// Object

for (let i = 0; i < aNumber; i++) {
  console.log(i)
}

let n = 0
while (n < 10) {
  console.log(n)
  n++
}

console.log('########################################')

// Loop in array:
for (let i = 0; i < anArray.length; i++) {
  console.log(`Element ${i} = ${anArray[i]}`)
}

// cleaner
for (let val of anArray) {
  console.log(val)
}

console.log('########################################')

// Loop in object
console.log(Object.keys(person))
for (let i = 0; i < Object.keys(person).length; i++) {
  let _key = Object.keys(person)[i]
  let _val = person[_key]
  console.log(`key: ${_key} | val: ${_val}`)
}

// cleaner
for (let _key in person) {
  console.log(`key is ${_key} | ${person[_key]}`)
}

// Data types
// Number , String, Array, Object
// let var const
let aNumber = 10
let aName = 'Kian'
let anArray = [1, 2, 'Peymani', aName]
let person = {
  name: aName,
  id: aNumber,
  age: 22,
  anythingElese: anArray
}

console.log(aNumber, typeof (aNumber))
console.log(aName, typeof (aName))
console.log(anArray, typeof (anArray), anArray[0])
console.log(person, typeof (person), person.name, person['name'])

console.log('########################################')

anArray['wtf'] = 'wtf'
console.log(anArray)
anArray['0'] = 'alan chi mishe ? :o'
console.log(anArray)

// Conclusion: arrays are awkward
// Or: Arrays are same as objects with numeric keys

console.log('########################################')

// Two ES6 syntax: const and Template strings
// const fix = false
// fix = true

// create a long string with variables in the classic way:
let aString = 'some text ' + aNumber + ' Some more text'
console.log(aString)

// new way:
let TemplateString = `some text and a value ${aNumber} like a boss`
console.log(TemplateString)

console.log(`some text and a value ${2 + 2 * aNumber} like a boss`)
console.log('########################################')

// Casting
// Type names + Uppercase
let aStringCastedToNumber = String(aNumber)
console.log(aStringCastedToNumber, typeof (aStringCastedToNumber))

// what about this?
let anArrayCastedToString = String(anArray)
console.log(anArrayCastedToString, typeof (anArrayCastedToString))

let anObjectCastedToString = String(person)
console.log(anObjectCastedToString, typeof (anObjectCastedToString))

console.log('########################################')

// we used a set of variables in two files

let aName = 'Kian'
let aNumber = 10
let anArray = [1, 2, 'Peymani', aName]
let person = {
  name: aName,
  id: aNumber,
  age: 22,
  anythingElese: anArray
}

// assume that we want to use some of our functions too

let aNormalFunction = function (x) {
  console.log(Object.keys(this))
  return x * 2
}

let anArrowFunction = (x) => {
  console.log(this)
  return x * 2
}

// anything attached to `module.export` can be imported using `require()`

module.exports = {
  functions: {
    arrow: anArrowFunction,
    normal: aNormalFunction
  },
  vars: {
    num: aNumber,
    name: aName
  }
}

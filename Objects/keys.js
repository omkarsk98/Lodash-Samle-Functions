// creates array of own keys
const _ = require('lodash');

let data = {
    a: 1,
    b: {
        c: 324,
        d: 45
    }
}

let res = _.keys(data)
console.log(res) // not returning nested keys

// keysIn(): return inherited keys too.

let obj1 = _.create(data, { z: 34 })
console.log(_.keys(obj1)) // [ 'z' ]
console.log(_.keysIn(obj1)) // [ 'z', 'a', 'b' ]

// values(): returns values of the object
// valuesIn(): returns inherited values too.

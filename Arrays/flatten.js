// flatten: flattens array upto 1 level
const _ = require("lodash")

let array = [34, 235, [32, 323], [[23], [324]], 34]
let res = _.flatten(array)
console.log(res)
// [ 34, 235, 32, 323, [ 23 ], [ 324 ], 34 ]

// flattenDeep: recursively flattens entire array
res = _.flattenDeep(array)
console.log(res)
// [ 34, 235, 32, 323, 23, 324, 34 ]

// flattenDepth: flattens array upto given depth
res = _.flattenDepth(array, 1)
console.log(res)
// [ 34, 235, 32, 323, [ 23 ], [ 324 ], 34 ]

array = [{ a: 1 }, { a: { b: 3 } }]
res = _.flattenDeep(array);
console.log(res)
// [ { a: 1 }, { a: { b: 3 } } ]
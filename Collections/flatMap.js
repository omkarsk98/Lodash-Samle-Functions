// flatMap(): flattens collection with predicate
// undfined for object
const _ = require("lodash");

let data = { a: 23, b: 3 }
// vales should not be objects or arrays
let res = _.flatMap(data, o => { return o ** 2 })
// [ 529, 9 ]
console.log(res)

// flatMapDeep(): recurcively flattens data with predicate
// flatMapDepth(): accepts depth to flatten
// returns all but the last element of the array
const _ = require("lodash");

let array = [234, 45, 42, 6543]
let res = _.initial(array) // [ 234, 45, 42 ]

array = [{ a: 3 }, { a: 54 }, { b: 435, a: 4523 }]
res = _.initial(array) // [ { a: 3 }, { a: 54 } ]
res = _.initial(array[2]) // []
// console.log(res)

// tail: returns all but the first element of the array
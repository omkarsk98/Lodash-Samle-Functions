// gets last element of the array
const _ = require("lodash");

let array = ["sdajn", 234, { a: 1 }]
let res = _.last(array)
console.log(res) // { a: 1 }

res = _.last(_.head(array)) // n
console.log(res)
// converts array key value pairs to object
const _ = require("lodash");

let array = [['a', 1], ['b', 2], ['c', ['d', 89]], ['t', { "ab": 56 }]]
let res = _.fromPairs(array)
console.log(res)
// { a: 1, b: 2, c: [ 'd', 89 ], t: { ab: 56 } }
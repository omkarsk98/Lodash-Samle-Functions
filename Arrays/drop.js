// returns n elements dropped from the beginning
const _ = require("lodash")
let array = [34, 32525, 5225, 255, 23552, { a: 4332 }, 'eg']

let res = _.drop(array, 1)
console.log(res)
// [ 5225, 255, 23552, { a: 4332 }, 'eg' ]

// "eg" in case of index, consideres  subarray ahead of the index

// frops n elements from the right
res = _.dropRight(array, 2)

console.log(res)
// [ 34, 32525, 5225, 255, 23552 ]

// dropRoghtWhile: drops from right untill predicate returns false

res = _.dropRightWhile(array, function (o) { return !_.isNumber(o) })
console.log("Drop right while", res)
// Drop right while [ 34, 32525, 5225, 255, 23552 ]

// dropWhile: drops from beginning untill predicate returns true
res = _.dropWhile(array, function (e) { return _.isNumber(e) })
console.log("Drop while:", res)
// Drop while: [ { a: 4332 }, 'eg' ]
// contradicts the example on the docs

// Converts all elements in array into a string separated by separator.
// use native join for better performance
const _ = require("lodash")

let array = [0, 214, 32423, "52", null, undefined, { a: 1 }]
let res = _.join(array, "~") // 0~214~32423~52~~~[object Object]
// nothing added for null and undefined
console.log(res)

// indexOf: return first index of value
// not good for array of objects, use findIndex because it accepts predicate
const _ = require("lodash");
let array = [34, 5235, 4366, 543]
let res = _.indexOf(array, 45346) // -1
res = _.indexOf(array, 4366) // 2

array = [{ a: 324 }, { a: 34345 }]
res = _.indexOf({ a: 324 }) // -1: points to different instance
console.log(res)

// sortedIndexOf(): uses binary search over sorted array. better option as it takes log(n) time
// sortedLastIndexOf(): uses binary search when duplicates are to be allowed
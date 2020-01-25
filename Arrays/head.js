// head: returns first element of the array
const _ = require("lodash")
let array = [324, 3256, 4323, 346, 'df'];
let res = _.head(array)
console.log(res)
// 324

array = [{ a: 23, b: 34 }, { "sfg": 45 }]
res = _.head(array)
console.log(res)
// { a: 23, b: 34 }
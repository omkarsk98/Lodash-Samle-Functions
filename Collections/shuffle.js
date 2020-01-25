// shuffles the collection randomly
const _ = require("lodash")
let array = [324, 544, 57, 543, null]
let res = _.shuffle(array)
console.log(res)

let data = { a: 324, b: { c: true, t: null } }
res = _.shuffle(data) // returns only the values
console.log(res)
// returns values of first array that are not present in second array, accepts a function to check difference
const _ = require("lodash");

let arr1 = [2.345, 12.235], arr2 = [2.32, 3.3535]
let arrDiff = _.differenceBy(arr1, arr2, Math.floor)
console.log(arrDiff)
// [ 12.235 ]

let arrObj1 = [
    { a: 1, b: 2 },
    { a: 1, b: 3 },
]

let arrObj2 = [
    { a: 1, b: 1 },
    { a: 1, b: 3 },
]

let arrObjDiff = _.differenceBy(arrObj1, arrObj2, 'b')
console.log(arrObjDiff)
// [ { a: 1, b: 2 } ]

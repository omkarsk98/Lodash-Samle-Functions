// returns values of first array that are not present in second array
const _ = require("lodash");

let arr1 = [2, 1], arr2 = [2, 3]
let arrDiff = _.difference(arr1, arr2)
console.log(arrDiff)
// [ 1 ]

let arrObj1 = [
    { a: 1, b: 2 },
    { a: 1, b: 3 },
]

let arrObj2 = [
    { a: 1, b: 1 },
    { a: 1, b: 3 },
]

let arrObjDiff = _.difference(arrObj1, arrObj2)
console.log(arrObjDiff)
// [ { a: 1, b: 2 }, { a: 1, b: 3 } ]
// second object in array is present because it conducts a shallow check. 
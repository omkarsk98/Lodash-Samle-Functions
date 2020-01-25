// intersection: array of unique values that are present in all the supplied arrays. order not imp
const _ = require("lodash");

let arr1 = [234, 23, 3535];
let arr2 = [3535, 32, 234];
let res = _.intersection(arr1, arr2) // [ 234, 3535 ]

arr1 = [{ a: 24, b: 3 }, { a: 2, b: 3 }]
arr2 = [{ a: 244, b: 43 }, { a: 2, b: 3 }]
res = _.intersection(arr1, arr2); // [] => has diff instances
// console.log(res)

// intersectionBy: identity to compare
res = _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); //[2.1]

// intersectionWith: predicate to compare
arr1 = [{ 'x': 1, 'y': 2 }, { 'x': "2", 'y': 1 }];
arr2 = [{ 'x': 1, 'y': 1 }, { 'x': "1", 'y': 2 }];
res = _.intersectionWith(arr1, arr2, function (e) { return _.isString(e.x) }) // [ { x: '2', y: 1 } ]
// console.log(res)


// xor(): returns all elements other then intersection
// xorBy(): accepts identity iteratee
// xorWith(): accepts comparator
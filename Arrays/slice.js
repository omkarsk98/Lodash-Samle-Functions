// returns a subarray of [start, end)
// use native function for performance
const _ = require("lodash");

let array = [43324, 324, 34, 2, 432, 3564];
let res = _.slice(array, 2, 4525) // [ 34, 2, 432, 3564 ]
console.log(res)

// take: slices n elements from the beginning
// takeWhile: slices while predicate return false. used for array of objects
// takeRight: slices n element from the end
// takeRightWhile(): slice from right while predicate returns false. used for array of objects
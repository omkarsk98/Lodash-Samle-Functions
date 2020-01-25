// VERY USEFUL FUNCTION
// Uses a binary search to determine the lowest index at which value should be inserted into array in order to maintain its sort order.
// index of element just after it if element is already present
// returns incorrect value if array is not sorted

const _ = require("lodash");

let array = [30, 34, 43, 46, 50]
let res = _.sortedIndex(array, 45) // 3
console.log(res)

// sortedIndexBy: accepts iteratee. can be used for array of objects
// _.sortedLastIndex([4, 5, 5, 5, 6], 5); => 4, when duplicates are to be allowed
// sortedLastIndexBy: accepts iteratee
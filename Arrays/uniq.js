// returns uniq values
const _ = require("lodash");
let array = [234, 234, 5423, 5456, 3, 45, 234]
let res = _.uniq(array) //[ 234, 5423, 5456, 3, 45 ]
console.log(res);

// uniqBy: accepts iteratee
// uniqWith: accepts comparator
// sortedUniq: optimised for sorted array
// sortedUniqBy: optimised for sorted array

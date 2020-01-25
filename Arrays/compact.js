// removes 0, '', false, null and undefined from array
const _ = require("lodash")

let data = [0, '', false, null, undefined, 23, 45, -25]

let result = _.compact(data);
console.log(result);

// [ 23, 45, -25 ]

// does not remove negative values
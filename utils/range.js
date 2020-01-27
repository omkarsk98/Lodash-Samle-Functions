// returns range from start to end
const _ = require('lodash');
// can be used as python range function

_.range(4);
// => [0, 1, 2, 3]

_.range(-4);
// => [0, -1, -2, -3]

// accepts step arguement
console.log(_.range(0, 20, 3))
// [ 0, 3, 6, 9, 12, 15, 18 ]

// rangeRight(): returns values in descending order
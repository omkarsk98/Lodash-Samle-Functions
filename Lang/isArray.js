const _ = require("lodash");

_.isArray([1, 2, 3]);
// => true

_.isArray('abc');
// => false

console.log(_.isArray([undefined]))
// true

// isArrayBuffer(): checks if value is an array buffer
// isArrayLike(): it is array like if it has a property 'length' and its value is gt 0 and less than max safe integer
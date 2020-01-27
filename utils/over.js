// creates a function that invokes iteratees

const _ = require('lodash');

let func = _.over([Math.max, Math.min]);
 
let res = func(1, 2, 3, 4);
console.log(res)
// [4, 1]
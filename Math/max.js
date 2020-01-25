// max(): max of an array
const _ = require('lodash');

// returns undefined if array is falsey or empty
_.max([4, 2, 8, 6]);

// maxBy(): accepts iteratee
let objects = [{ 'n': 1 }, { 'n': 2 }];
_.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }


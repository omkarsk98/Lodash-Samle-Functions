const _ = require('lodash');

_.mean([4, 2, 8, 6]);
// => 5

// meanBy(): accepts iteratee. used for array of objects
let objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
_.meanBy(objects, 'n')
// { 'n': 8 }


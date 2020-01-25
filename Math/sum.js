const _ = require('lodash');

// sum(): computes sum of values of array
_.sum([4, 2, 8, 6]);
// => 20

// sumBy(): accepts iteratee
let objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
_.sumBy(objects, 'n');
// => 20
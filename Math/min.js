const _ = require('lodash');

_.min([4, 2, 8, 6]);
// => 2

_.min([]);
// => undefined

let objects = [{ 'n': 1 }, { 'n': 2 }];
_.minBy(objects, 'n');
// => { 'n': 1 }


// check if string endsWith the value
const _ = require('lodash');

_.endsWith('abc', 'c'); // => true
_.endsWith('abc', 'b'); // => false
_.endsWith('abc', 'b', 2); // => true
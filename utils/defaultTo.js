// checks if value is Nan, null or undefined
const _ = require('lodash');

_.defaultTo(1, 10);
// => 1

_.defaultTo(undefined, 10);
// => 10
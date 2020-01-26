// same as find(), works on objects
const _ = require('lodash');

let users = {
    'barney': { 'age': 36, 'active': true },
    'fred': { 'age': 40, 'active': false },
    'pebbles': { 'age': 1, 'active': true }
};

_.findKey(users, function (o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)

_.findKey(users, 'active');
  // => 'barney'
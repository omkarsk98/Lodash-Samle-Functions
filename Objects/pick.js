// creates an object of the picked keys
const _ = require('lodash');

let object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }

// pickBy(): acceptes predicate of iteratee type
_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }
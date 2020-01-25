// same as js map.
// returns an array of return values invoked by predicate over all elements of array
const _ = require("lodash");

let users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];

// The `_.property` iteratee shorthand.
_.map(users, 'user');
  // => ['barney', 'fred']
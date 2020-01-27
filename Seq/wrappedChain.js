// same as chain but a wrapped version of it.
const _ = require('lodash');

let users = [
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred', 'age': 40 }
];

// A sequence with explicit chaining.
let res = _(users)
    .chain()
    .head()
    .pick('user')
    .value();

console.log(res)
// { user: 'barney' }
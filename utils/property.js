// returns the value at the path
const _ = require('lodash');

let objects = [
    { 'a': { 'b': 2 } },
    { 'a': { 'b': 1 } }
];

let res = _.map(objects, _.property('a'));
console.log(res);
// [ { b: 2 }, { b: 1 } ]

res = _.sortBy(objects, _.property(['a.b']));
console.log(res)

// propertyOf(): returns value at given path of Object
c
// creates function that performs a partial deep comparison between a given object and source
const _ = require('lodash');

let objects = [
    { 'a': 1, 'b': 2, 'c': 3 },
    { 'a': 4, 'b': 5, 'c': 6 }
];

_.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
// => [{ 'a': 4, 'b': 5, 'c': 6 }]

// matchesProperty(): accepts path so that nested data can be matched

objects = [
    { 'a': 1, 'b': 2, 'c': { 'd': { e: 50 } } },
    { 'a': 4, 'b': 5, 'c': 6 }
];

let res = _.filter(objects, _.matchesProperty('c.d.e', 50))
console.log(res)
// [ { a: 1, b: 2, c: { d: [Object] } } ]
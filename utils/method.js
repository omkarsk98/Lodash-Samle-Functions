// invokes the method at the path
const _ = require('lodash');

let objects = [
    { 'a': { 'b': _.constant(2) } },
    { 'a': { 'b': _.constant(1) } }
];

_.map(objects, _.method('a.b'));
// => [2, 1]

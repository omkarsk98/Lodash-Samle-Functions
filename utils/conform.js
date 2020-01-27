// invokes the predicate properties of source with the corresponding property values of a given object,
// returning true if all predicates return truthy, else false.
const _ = require('lodash');

let objects = [
    { 'a': 2, 'b': 1 },
    { 'a': 1, 'b': 2 }
];

_.filter(objects, _.conforms({ 'b': function (n) { return n > 1; } }));
// => [{ 'a': 1, 'b': 2 }]
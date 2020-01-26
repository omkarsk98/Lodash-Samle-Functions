// check if object has the given path
const _ = require('lodash');

var object = { 'a': { 'b': 2 } };
var other = _.create({ 'a': _.create({ 'b': 2 }) });

_.has(object, 'a');
// => true

_.has(object, 'a.b');
// => true

_.has(object, ['a', 'b']);
// => true

_.has(other, 'a');
// => false

console.log(other, object);

// hasIn(): acceots inherited objects too
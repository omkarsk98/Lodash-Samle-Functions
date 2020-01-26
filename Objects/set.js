// sets value on the path. If partial path is not found, it is created!!
const _ = require('lodash');
let object = { 'a': [{ 'b': { 'c': 3 } }] };

_.set(object, 'a[1].b.c', 300)
console.log(object)
// { 'a': [{ 'b': { 'c': 3 } },{ b : { c : 300 } }] };

// setWith(): accepts customizer

// unset(): removes value at the path => mutates the object

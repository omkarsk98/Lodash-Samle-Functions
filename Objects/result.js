// same as get but invokes function if the value is a function
const _ = require('lodash');

let object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
_.result(object, 'a[0].b.c1');
// => 3

_.result(object, 'a[0].b.c2');
// => 4

_.result(object, 'a[0].b.c3', 'default');
// => 'default'

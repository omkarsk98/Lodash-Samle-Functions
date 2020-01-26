// same as set but accepts updater to produce the value dynamically
const _ = require('lodash');

let object = { 'a': [{ 'b': { 'c': 3 } }] };

_.update(object, 'a[0].b.c', function (n) { return n * n; });
console.log(object.a[0].b.c);
// => 9

_.update(object, 'x[0].y.z', function (n) { return n ? n + 1 : 0; });
console.log(object.x[0].y.z);
// => 0

// updateWith(): accepts customizer

// same as at but a wrapped version
const _ = require('lodash');

let object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
let res = _(object).at(['a[0].b.c', 'a[1]']).value();
console.log(res);
// [ 3, 4 ]
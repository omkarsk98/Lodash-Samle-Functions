// returns arguement at the nth index;
const _ = require('lodash');

let func = _.nthArg(1);
let res = func('a', 'b', 'c', 'd');
console.log(res);
// b
// invokes the supplied function only once, returns the same result when invoked again
const _ = require('lodash');

let func = function (x) { console.log(x ** 2) }

let res = _.once(func);

res(2)
res(3) // not invoked

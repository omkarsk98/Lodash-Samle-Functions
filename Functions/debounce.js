// delays calling of function upto n ms since the time it was called last.
const _ = require('lodash');

let func = function () {
    console.log("called func");
}

let res = _.debounce(func, 1000)

res();
console.time('res')
res(); // called after 1 second
console.timeEnd('res')
console.log("Code moved ahead") // code execution does not stop
// clones the chainable sequence by replacing the values 
const _ = require('lodash');

function square(n) {
    return n * n;
}

let wrapped = _([1, 2]).map(square);
let other = wrapped.plant([3, 4]);

let res = other.value();
console.log(res);
// => [9, 16]

res = wrapped.value();
console.log(res)
// => [1, 4]
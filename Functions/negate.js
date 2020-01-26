// negates the result of func
const _ = require('lodash');

function isEven(n) {
    return n % 2 == 0;
}

_.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]
// creates chain of functions where result of previous is supplied to next;
const _ = require('lodash');

function square(n) {
    return n * n;
}

var addSquare = _.flow([_.add, square]);
addSquare(1, 2);
// => 9

// flowRight(): functions called left to right
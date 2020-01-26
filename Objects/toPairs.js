// coverts object to array of pairs. includes only own properties
const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.toPairs(new Foo);
// => [['a', 1], ['b', 2]]

// toPairsIn(): includes inherited properties too.
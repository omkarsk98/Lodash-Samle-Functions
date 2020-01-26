// iterates over only own properties and not over inherited properties
// can be ended by returning false

const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.forOwn(new Foo, function (value, key) {
    console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).

// forOwnRight(): iterates form right to left
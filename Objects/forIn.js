// same as forEach. forEach loop cannot be broken. forIn can be broken by returning false
const _ = require('lodash');

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.forIn(new Foo, function (value, key) {
    if (key === 'b')
        return false;
    console.log(key);
});
// logs only 'a'


// forInRight(): iterates from right
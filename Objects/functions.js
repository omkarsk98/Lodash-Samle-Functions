// creates array of functions of own properties
const _ = require('lodash');

function Foo() {
    this.a = _.constant('a');
    this.b = _.constant('b');
    this.d = "I am d";
}

Foo.prototype.c = _.constant('c');

let res = _.functions(new Foo);
console.log(res);
// d not returned because it is not a function

// functionsIn(): uses inherited properties too.
const _ = require('lodash');

// assign(): same as Object.assign() but mutates the object;
function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;
// inherited properties not included

_.assign({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'c': 3 }


// assignIn(): accepts inherited properites too.
function Foo() {
    this.a = 1;
}

function Bar() {
    this.c = 3;
}

Foo.prototype.b = 2;
Bar.prototype.d = 4;

_.assignIn({ 'a': 0 }, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }

// assignWith(): accepts customizer
// assignInWith(): accepts customizer
// inherits supplied object. accepts additional properties
const _ = require('lodash');

function Shape() {
    this.x = 0;
    this.y = 0;
}

function Circle() {
    Shape.call(this);
}

Circle.prototype = _.create(Shape.prototype, {
    'constructor': Circle
});

var circle = new Circle;
circle instanceof Circle;
// => true

circle instanceof Shape;
// => true

// findLastKey(): finds from last
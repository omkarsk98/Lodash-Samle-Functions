const _ = require('lodash');

function greet(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
}

var object = { 'user': 'fred' };

var bound = _.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// partial(): same as bind but does not alter this binding
// partialRight(): same as bindRight() but does not alter this binding
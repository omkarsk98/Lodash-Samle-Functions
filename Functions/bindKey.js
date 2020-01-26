const _ = require('lodash');
// bindKey(object, key, [partials]) calls te function in object at key with partial arguments prependend

var object = {
    'user': 'fred',
    'greet': function (greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }
};

var bound = _.bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'
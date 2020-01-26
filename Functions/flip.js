// calls func with arguements reversed
const _ = require('lodash');

var flipped = _.flip(function () {
    return _.toArray(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
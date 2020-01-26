// keys to values and valeus to keys
const _ = require('lodash');

let object = { 'a': 1, 'b': 2, 'c': 1 };

_.invert(object);
// => { '1': 'c', '2': 'b' }

// invertBy(): accepts iteratee
_.invertBy(object, function (value) {
    return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }
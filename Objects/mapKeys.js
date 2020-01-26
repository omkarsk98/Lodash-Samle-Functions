// maps on the keys of the object;
const _ = require('lodash');

// key gets changed but value remains same
let res = _.mapKeys({ 'a': 1, 'b': 2 }, function (value, key) {
    return key + value;
});

console.log(res)
// { a1: 1, b2: 2 }

// mapValues(): value gets changed but keys remain same
